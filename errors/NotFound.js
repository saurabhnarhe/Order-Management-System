const BaseError = require("./BaseError");

class NotFound extends BaseError {
  constructor(errors) {
    super(404, "NotFound", errors);
  }
}

module.exports = NotFound;
