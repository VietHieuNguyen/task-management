const express = require("express");
const database = require("./config/database");
const bodyParser = require("body-parser")
const cors = require("cors")
require("dotenv").config();

const route = require("./api/v1/routes/index.routes")
database.connect();

const app = express();

const port = process.env.PORT;

app.use(cors())

// parse application/json
app.use(bodyParser.json())

route(app);





app.listen(port, () => {
  console.log(`App listen on port: ${port}`);
});
