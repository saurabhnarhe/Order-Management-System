const express = require("express");
const { orderController, userController } = require("./controllers");
const { validate, userValidator, orderValidator } = require("./validators");
const routes = express.Router();

routes.get(
  "/orders",
  validate(orderValidator.getAllValidator),
  orderController.getAllAsync
);
routes.get(
  "/orders/:id",
  validate(orderValidator.getByIdValidator),
  orderController.getByIdAsync
);
routes.post(
  "/orders",
  validate(orderValidator.createValidator),
  orderController.createAsync
);
routes.put(
  "/orders/:id",
  validate(orderValidator.updateValidator),
  orderController.updateAsync
);
routes.delete(
  "/orders/:id",
  validate(orderValidator.deleteByIdValidator),
  orderController.deleteByIdAsync
);

routes.post(
  "/users/login",
  validate(userValidator.loginValidator),
  userController.loginAsync
);

module.exports = routes;
