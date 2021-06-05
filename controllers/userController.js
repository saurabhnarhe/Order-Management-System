const { userService } = require("../services");

const loginAsync = async (req, res, next) => {
  const { username, password } = req.body;
  const token = await userService.loginAsync(username, password);
  res.status(200).send({ token });
};

module.exports = {
  loginAsync,
};
