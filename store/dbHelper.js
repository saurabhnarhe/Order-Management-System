const Postgre = require("pg");

let pool = null;
const _createConnection = async () => {
  pool = new Postgre.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
  });
};

const getClientAsync = async () => {
  if (pool) return pool.connect();
  else {
    _createConnection();
    return pool.connect();
  }
};

module.exports = { getClientAsync };
