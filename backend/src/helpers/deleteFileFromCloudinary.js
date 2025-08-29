const cloudinary = require("../config/cloudinary");

const publicIdFromUrl = (secureUrl) => {
  const pathSegments = secureUrl.split("travelDemo/");
  const lastSegment = pathSegments[pathSegments.length - 1];
  const [publicId] = lastSegment.split(".");
  return "travelDemo/" + publicId;
};

const deleteFileFromCloudinary = async (publicId) => {
  try {
    const response = await cloudinary.uploader.destroy(publicId);
    console.log("File successfully deleted from cloudinary");
    return response;
  } catch (error) {
    console.error("Error delete from cloudinary", error);
    throw error;
  }
};

module.exports = { publicIdFromUrl, deleteFileFromCloudinary };
