const mongoose = require("mongoose");

const message = mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String
});

module.exports = mongoose.model('message', message)
