const nodemailer = require("nodemailer");

require("dotenv").config();
// Function to send OTP to the user's email
async function sendOtpEmail(email, otp) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.auth_EMAIL,
        pass: process.env.auth_PASS,
      },
    });

    const mailOptions = {
      from: process.env.auth_EMAIL,
      to: email,
      subject: "OTP Verification",
      text: `Your OTP is: ${otp}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

module.exports = sendOtpEmail;
