var nodemailer = require("nodemailer");

var email = `${process.env.email}`;
var password = `${process.env.password}`;

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
    text: `Name: ${data.firstname} ${data.lastname}\nEmail: ${data.email}\n\n${data.message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
      if(error){
          console.log(error);
      }else{
          console.log("Email sent: " + info.response);
      }
  })
};
