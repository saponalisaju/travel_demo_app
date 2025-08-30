const deleteFile = require("../helpers/deleteFileFromCloudinary");
const Slider = require("../models/sliderModel");
const path = require("path");
const fs = require("fs");
const { uploadFile } = require("../helpers/uploadCloudFile");

exports.fetchSlider = async (req, res) => {
  try {
    const usersAll = await Slider.find({});
    res.json(usersAll);
  } catch (error) {
    console.error("Error fetching sliders:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
exports.addSlider = async (req, res) => {
  try {
    if (!req.file || !req.body.title) {
      return res.status(400).json({ message: "Image and title are required" });
    }
    const image = req.file?.path;
    let secure_url = "";
    let public_id = "";
    if (image) {
      ({ secure_url, public_id } = await uploadFile(
        image,
        "travelDemo/slider"
      ));
    }

    const newSlider = new Slider({
      ...req.body,
      image: secure_url,
      imagePublicId: public_id,
    });
    await newSlider.save();
    res.status(201).json(newSlider);
  } catch (error) {
    console.error("Error adding slider:", error);
    res
      .status(500)
      .json({ message: "Error adding slider ", error: error.message });
  }
};

exports.updateSlider = async (req, res) => {
  try {
    const { id } = req.params;
    const sliderExist = await Slider.findById(id);
    if (!sliderExist) {
      return res.status(404).json({ message: "Slider not found" });
    }
    const updatedSlider = await Slider.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.json(updatedSlider);
  } catch (error) {
    console.error("Error updating slider:", error);
    res.status(500).json({ message: error.message });
  }
};

exports.deleteSlider = async (req, res) => {
  const { id } = req.params;
  try {
    const slider = await Slider.findByIdAndDelete(id);
    if (!slider) {
      return res.status(404).json({ message: "Slider not found" });
    }

    
    res.json({ message: "Slider is deleted" });
  } catch (error) {
    console.error("Error deleting slider:", error);
    res.status(500).json({ message: error.message });
  }
};
