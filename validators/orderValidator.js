const { header } = require("express-validator");
const { verify } = require("../helper/tokenizer");

const authTokenValidator = header("token").custom((token) => {
  if (!token || !verify(token)) {
    throw new Error("Unathorized request");
  }
});

const getAllValidator = [authTokenValidator];
const getByIdValidator = [authTokenValidator];
const createValidator = [authTokenValidator];
const updateValidator = [authTokenValidator];
const deleteByIdValidator = [authTokenValidator];

module.exports = {
  getAllValidator,
  getByIdValidator,
  createValidator,
  updateValidator,
  deleteByIdValidator,
};
