const BaseError = require("./BaseError.js");

class InvalidUserCredentials extends BaseError {
  constructor() {
    super(404, "Invalid user credentials");
  }
}

module.exports = InvalidUserCredentials;
