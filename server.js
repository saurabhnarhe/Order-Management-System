const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const routes = require("./routes");
const errorHandlerMiddleware = require("./midlewares/errorHandlerMiddleware");

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use("/", routes);
app.use(errorHandlerMiddleware);

const port = process.env.SERVER_PORT || 5000;
app.listen(port, () => console.log(`server listening on ${port}`));
