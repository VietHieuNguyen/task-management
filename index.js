const express = require("express");
const database = require("./config/database");
require("dotenv").config();

const route = require("./api/v1/routes/index.routes")
database.connect();

const app = express();

const port = process.env.PORT;

route(app);

app.listen(port, () => {
  console.log(`App listen on port: ${port}`);
});
