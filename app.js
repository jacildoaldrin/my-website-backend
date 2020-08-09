const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

// routes
const messageRoute = require("./routes/Message");

app.use("/messages", messageRoute);

app.use(express.json());

mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Successful connection to DB!!!");
});

app.listen(5000);
