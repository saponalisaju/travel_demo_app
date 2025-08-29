const mongoose = require("mongoose");

const designationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Designation = mongoose.model("Designation", designationSchema);
module.exports = Designation;
