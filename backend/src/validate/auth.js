const { body } = require("express-validator");

exports.validateUserRegister = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required. Enter your fullname")
    .isLength({ min: 4, max: 31 })
    .withMessage("Name should be at least 4-24 character long"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required. Enter your email address")
    .isEmail()
    .withMessage("Invalid email"),

  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required. Enter your password"),
];
exports.validateUserLogin = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required. Enter your email address")
    .isEmail()
    .withMessage("Invalid email"),

  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required. Enter your password"),
];
