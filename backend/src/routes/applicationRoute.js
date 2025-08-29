const express = require("express");
const router = express.Router();
const applicationController = require("../controllers/applicationController");

const { applicationValidate } = require("../validate/applicationValidate");
const { runValidation } = require("../validate");
const {
  uploadApplication,
  uploadAddApplication,
} = require("../helpers/uploadCloudFile");

//const upload = require("../middlewares/uploadFile");

router.get("/fetchApplication", applicationController.fetchApplication);
router.get("/fetchApplication/:id", applicationController.fetchApplicationById);
router.get(
  "/fetchApplicationEnquiry",
  applicationController.fetchApplicationEnquiry
);

router.post(
  "/addApplication",
  uploadApplication.single("image"),
  applicationValidate,
  runValidation,
  applicationController.addApplication
);

router.put(
  "/updateApplication/:id",
  uploadApplication.single("image"),
  applicationController.updateApplication
);

router.put(
  "/updateApplicationAdd/:id",
  uploadAddApplication.fields([
    { name: "file0" },
    { name: "file1" },
    { name: "file2" },
    { name: "file3" },
    { name: "file4" },
    { name: "file5" },
  ]),
  applicationController.updateApplicationAdd
);

router.put(
  "/updateApplicationApprove/:id",
  applicationController.updateApplicationApprove
);

router.put(
  "/updateApplicationPending/:id",
  applicationController.updateApplicationPending
);

router.put(
  "/updateApplicationReject/:id",
  applicationController.updateApplicationReject
);

router.put(
  "/updateApplicationView/:id",
  uploadApplication.single("file"),
  applicationController.updateApplicationView
);

router.delete(
  "/deleteApplication/:id",
  applicationController.deleteApplication
);

module.exports = router;
