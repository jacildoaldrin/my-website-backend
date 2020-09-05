var nodemailer = require("nodemailer");

var email = String.toString(process.env.EMAIL);
var password = String.toString(process.env.PASSWORD);

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password,
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
