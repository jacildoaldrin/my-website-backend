const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const messageRoute = require("./routes/Message");

const cors = require("cors");
app.use(cors());

require("dotenv/config");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// routes
app.use("/messages", messageRoute);

mongoose.set("useUnifiedTopology", true);
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Successful connection to DB!!!");
});

app.listen(3010, () => console.log("App listening on port 3010"));
