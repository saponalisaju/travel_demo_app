const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");
const { validateUserRegister, validateUserLogin } = require("../validate/auth");
const { runValidation } = require("../validate");
const { isLoggedIn } = require("../middlewares/auth");

router.post(
  "/register",
  validateUserRegister,
  runValidation,
  userController.register
);

router.post("/login", validateUserLogin, runValidation, userController.login);
router.post("/logout", isLoggedIn, userController.logout);
router.get("/dashboard", userController.dashboard);

module.exports = router;
