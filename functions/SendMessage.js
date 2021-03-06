var nodemailer = require("nodemailer");
require("dotenv/config");

var email = process.env.EMAIL;
var password = process.env.PASSWORD;

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

module.exports.send = (data) => {
  var mailOptions = {
    from: email,
    to: "jacildo.aldrinjohn@gmail.com",
    subject: data.subject,
    text: `Name: ${data.name}\nEmail: ${data.email}\n\nSubject: ${data.subject}\n\n${data.message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
