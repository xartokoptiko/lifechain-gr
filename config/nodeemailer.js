import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'contuct.lifechain@gmail.com', // Replace with your Gmail email
    pass: 'wzcriyvcuqkrglej', // Replace with your Gmail app password
  },
});

export const mailOptions = {
  from: email, // Your email (replace with process.env.EMAIL if you're using environment variables)
  to: "antegia123321@gmail.com", // The recipient's email address
};

export default transporter;