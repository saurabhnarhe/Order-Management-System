const orderController = require("./orderController");
const userController = require("./userController");

const withErrorHandlerAsync = (func) => async (req, res, next) => {
  try {
    await func(req, res, next);
  } catch (err) {
    next(err);
  }
};

const controllers = { orderController, userController };

for (let controller in controllers) {
  for (let func in controllers[controller]) {
    controllers[controller][func] = withErrorHandlerAsync(
      controllers[controller][func]
    );
  }
}

module.exports = controllers;
