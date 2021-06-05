const { body } = require("express-validator");

const loginValidator = [
  body("username", "username is mandatory").exists().not(""),
  body("password", "password is mandatory").exists().not(""),
];

module.exports = { loginValidator };
