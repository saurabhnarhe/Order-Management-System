const jwt = require("jsonwebtoken");
const algorithm = "HS256";
const secret = "secret";

const tokenizeAsync = (payload) =>
  new Promise((resolve, reject) => {
    jwt.sign(payload, secret, { algorithm }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });

const verify = (token) => {
  try {
    const res = jwt.verify(token, secret);
    console.log(res);
  } catch (e) {
    if (e instanceof jwt.JsonWebTokenError) return false;
  }
  return true;
};

module.exports = {
  tokenizeAsync,
  verify,
};
