const BaseError = require("./BaseError");

class ValidationError extends BaseError {
  constructor(errors) {
    super(400, "One or more validation errors occured", errors);
  }
}

module.exports = ValidationError;
