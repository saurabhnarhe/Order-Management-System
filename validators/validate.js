const { validationResult } = require("express-validator");
const { ValidationError } = require("../errors");

module.exports = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) return next();
    else return next(new ValidationError(errors.array()));
  };
};
