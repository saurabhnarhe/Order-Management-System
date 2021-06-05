const { InvalidUserCredentials } = require("../errors");
const { tokenizeAsync } = require("../helper/tokenizer");

const loginAsync = async (username, password) => {
  if (username === "admin" && password === "secret") {
    return tokenizeAsync({ username, role: "admin" });
  } else {
    throw new InvalidUserCredentials();
  }
};

module.exports = {
  loginAsync,
};
