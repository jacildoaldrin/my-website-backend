const mongoose = require("mongoose");

const message = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    subject: String,
    message: String
});

module.exports = mongoose.model('message', message)
