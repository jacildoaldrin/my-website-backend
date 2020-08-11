const express = require("express");
var bodyParser = require('body-parser')
const app = express();
const mongoose = require("mongoose");

const cors = require("cors");
app.use(cors());

require("dotenv/config");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// routes
const messageRoute = require("./routes/Message");

app.use("/messages", messageRoute);


mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Successful connection to DB!!!");
});

app.listen(5000);
