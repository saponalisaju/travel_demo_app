const multer = require("multer");
const cloudinary = require("../config/cloudinary");

const ALLOWED_FILE_TYPES = ["image/jpg", "image/png", "image/jpeg"];
const MAX_FILE_SIZE = 5 * 1024 * 1024;

const sliderStorage = multer.diskStorage({
  filename: (req, res, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const applicationStorage = multer.diskStorage({
  filename: (req, res, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const applicationAddStorage = multer.diskStorage({
  filename: (req, res, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, res, cb) => {
  if (ALLOWED_FILE_TYPES.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only JPEG, JPG and PNG are allowed"));
  }
};

const uploadSlider = multer({
  storage: sliderStorage,
  limits: { fileSize: MAX_FILE_SIZE },
  fileFilter: fileFilter,
});

const uploadApplication = multer({
  storage: applicationStorage,
  limits: { fileSize: MAX_FILE_SIZE },
  fileFilter: fileFilter,
});

const uploadAddApplication = multer({
  storage: applicationAddStorage,
  limits: { fileSize: MAX_FILE_SIZE },
  fileFilter: fileFilter,
});

const uploadFile = async (image, folder) => {
  try {
    const response = await cloudinary.uploader.upload(image, {
      folder: folder,
    });
    console.log("File upload to cloudinary successfully");
    return { secure_url: response.secure_url, public_id: response.public_id };
  } catch (error) {
    console.error("Error uploading file", error);
    throw error;
  }
};

const uploadAddFile = async (filePath, folder) => {
  try {
    const response = await cloudinary.uploader.upload(filePath, {
      folder: folder,
    });
    console.log("File upload to cloudinary successfully");
    return { secure_url: response.secure_url, public_id: response.public_id };
  } catch (error) {
    console.error("Error uploading file", error);
    return { secure_url: "default.png", public_id: "" };
  }
};

module.exports = {
  uploadFile,
  uploadAddFile,
  uploadSlider,
  uploadApplication,
  uploadAddApplication,
};
