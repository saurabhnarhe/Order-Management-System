const { BaseError } = require("../errors");

module.exports = async (err, req, res, next) => {
  if (err instanceof BaseError)
    res.status(err.code).json({
      message: err.message,
      errors: err.errors,
    });
  else
    res.status(500).json({
      status: "error",
      message: "Oh snap! Our service is not working...",
    });
};
