const fs = require("fs");
const path = require("path");
const deleteFile = require("../helpers/deleteFileFromCloudinary");
const Application = require("../models/applicationModel");
const { error } = require("console");
const moment = require("moment");
const sendEmail = require("../helpers/mail");
const { query } = require("winston");
const passport = require("passport");
const { uploadFile, uploadAddFile } = require("../helpers/uploadCloudFile");

exports.fetchApplication = async (req, res) => {
  const { page = 1, limit = 10, search = "" } = req.query;
  try {
    const app = await Application.find({});
    const applications = await Application.find({
      passport: { $regex: search, $options: "i" },
    })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    console.log(app);

    const count = await Application.countDocuments({
      passport: { $regex: search, $options: "i" },
    });

    res.json({
      applications,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      totalApplication: count,
    });
  } catch (error) {
    console.error("Error fetching pages:", error.message);
    res.status(500).json({
      message: "An error occurred while fetching pages.",
      error: error.message,
    });
  }
};

exports.fetchApplicationById = async (req, res) => {
  const { id } = req.params;
  try {
    const application = await Application.findById(id);
    console.log(application);
    res.json(application);
  } catch (error) {
    console.error("Error fetching pages:", error.message);
    res.status(500).json({
      message: "An error occurred while fetching pages.",
      error: error.message,
    });
  }
};

exports.fetchApplicationEnquiry = async (req, res) => {
  const {
    page = 1,
    limit = 10,
    search = "",
    search1 = "",
    search2 = "",
  } = req.query;

  const startDay = new Date(search2);
  startDay.setHours(0, 0, 0, 0);

  const endDay = new Date(search2);
  endDay.setHours(23, 59, 59, 999);

  try {
    const query = {
      passport: { $regex: search, $options: "i" },
      currentN: { $regex: search1, $options: "i" },
      dob: { $gte: startDay, $lte: endDay },
    };
    const applications = await Application.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();

    const count = await Application.countDocuments(query);

    res.json({
      applications,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
    });
  } catch (error) {
    console.error("Error fetching pages:", error.message);
    res.status(500).json({
      message: "An error occurred while fetching pages.",
      error: error.message,
    });
  }
};

exports.addApplication = async (req, res) => {
  try {
    const existingUser = await Application.findOne({
      $or: [{ email: req.body.email }, { passport: req.body.passport }],
    });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email or passport already exists" });
    }

    if (!req.file || !req.body.email) {
      return res.status(400).json({ message: "File and email are required." });
    }
    const image = req.file?.path;
    let secure_url = "";
    let public_id = "";
    if (image) {
      ({ secure_url, public_id } = await uploadFile(
        image,
        "travelDemo/application"
      ));
    }
    const newApplication = new Application({
      ...req.body,
      image: secure_url,
      imagePublicId: public_id,
    });

    await newApplication.save();
    console.log(newApplication);
    res.status(201).json(newApplication);
  } catch (error) {
    console.error("Error adding application");
    res.status(500).json({
      message: "Error adding application. please try again",
      error: error.message,
    });
  }
};

exports.updateApplication = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await Application.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    await updatedUser.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateApplicationAdd = async (req, res) => {
  const { id } = req.params;
  try {
    const existingUser = await Application.findById(id);
    if (!existingUser) {
      return res.status(404).send("Application not found");
    }

    const files = req.files;
    const updateFields = {};
    for (const fileField in files) {
      const filePath = files[fileField][0].path;
      const { secure_url, public_id } = await uploadAddFile(
        filePath,
        `travelDemo/${fileField}`
      );
      updateFields[fileField] = secure_url;
      updateFields[`${fileField}publicId`] = public_id;
      if (existingUser[fileField]) {
        const oldPublicId = deleteFile.publicIdFromUrl(existingUser[fileField]);
        await deleteFile.deleteFileFromCloudinary(oldPublicId);
      }
    }

    const updatedApplication = await Application.findByIdAndUpdate(
      id,
      { ...req.body, ...updateFields },
      {
        new: true,
      }
    );

    if (!updatedApplication) {
      return res.status(404).json({ message: "Application not found" });
    }

    if (existingUser.file0) {
      await sendEmail.sendEmailApprovedApplication(
        existingUser.email,
        existingUser.surname
      );
    }

    if (
      existingUser.file1 ||
      existingUser.file2 ||
      existingUser.file3 ||
      existingUser.file4
    ) {
      await sendEmail.sendEmailJobLetter(
        existingUser.email,
        existingUser.surname
      );
    }
    if (
      existingUser.file5 ||
      existingUser.file6 ||
      existingUser.file7 ||
      existingUser.file8
    ) {
      await sendEmail.sendEmailLmiAs(existingUser.email, existingUser.surname);
    }

    if (existingUser.file9 || existingUser.file10) {
      await sendEmail.sendEmailVisa(existingUser.email, existingUser.surname);
    }
    if (existingUser.file11) {
      await sendEmail.sendEmailWorkPermits(
        existingUser.email,
        existingUser.surname
      );
    }

    await updatedUser.save();
    res.json(updatedUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateApplicationApprove = async (req, res) => {
  try {
    const { id } = req.params;
    const appUser = await Application.findById(id);
    if (appUser) {
      const updatedUser = await Application.findByIdAndUpdate(
        id,

        { approve: moment().format("YYYY-MM-DD"), isStatus: "approved" },
        { new: true }
      );

      sendEmail(appUser.email, appUser.surname);

      res.json(updatedUser);
    } else {
      res.status(404).json({ message: "Application not found" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateApplicationPending = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await Application.findByIdAndUpdate(
      id,
      req.body,
      { isStatus: "pending" },
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateApplicationReject = async (req, res) => {
  try {
    const { id } = req.params;
    const appUser = await Application.findById(id);
    if (appUser) {
      const updatedUser = await Application.findByIdAndUpdate(
        id,
        { isStatus: "rejected" },
        { new: true }
      );
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: "Application not found" });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateApplicationView = async (req, res) => {
  const { id } = req.params;
  const file = req.file?.filename;
  const filePath = req.file?.path;

  try {
    if (!id) {
      throw new Error("No ID provided");
    }

    const updatedUser = await Application.findByIdAndUpdate(
      id,
      { ...req.body, file: file, filePath: filePath },
      { new: true }
    );
    console.log("hello", updatedUser);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteApplication = async (req, res) => {
  const { id } = req.params;
  try {
    const application = await Application.findByIdAndDelete({ _id: id });
    if (!application) {
      return res.status(404).json({ message: "Application not found" });
    }
    if (application.path) {
      await deleteFile(application.path);
    }

    if (application.filePath) {
      await deleteFile(application.filePath);
    }

    res.json({ message: "Application deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getApplicationUser = async (req, res) => {
  try {
    const { passport } = req.params;
    const applications = await Application.findOne({ passport });
    if (applications) {
      res.json(applications);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
};
