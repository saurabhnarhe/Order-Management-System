class BaseError {
  constructor(code, message, errors = []) {
    this.code = code;
    this.message = message;
    this.errors = errors;
  }
}

module.exports = BaseError;
