require("dotenv").config();
let nodemailer = require("nodemailer");

const EMAIL_ID = process.env.EMAIL_ID;
const PASSWORD = process.env.PASSWORD;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ message: "Only POST requests allowed" });
    return;
  }

  const { name, email, msg, token } = req.body;

  const human = await validateHuman(token);

  if (!human) {
    res
      .status(400)
      .json({ status: "failed", message: "Mail Not Sent Successfully" });
    return;
  }

  const mailData = {
    from: EMAIL_ID,
    to: EMAIL_ID,
    subject: `New Contact us Alert | ${name}`,
    text: " By : " + email,
    html: `<h2 style="border-bottom:2px solid black;padding:10px">Your Alert For <span style="font-weight:700">Contact Us</span></h2><p>Name - <span style="font-weight:700">${name}</span></p>Email - <span style=color:grey>${email}</span></p><p style=background:#e7e7e7;padding:20px;border-radius:5px;font-size:16px>${msg}</p>`,
  };

  try {
    const response = await sendMail(mailData);
    if (response) {
      res
        .status(200)
        .json({ status: "success", msg: "Mail Sent Successfully" });
      return;
    }
  } catch (error) {
    res.status(400).json({ status: "failed", message: "Some error occured" });
    return;
  }

  res
    .status(500)
    .json({ status: "failed", message: "Mail Not Sent Successfully" });
}

async function sendMail(mailData) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: EMAIL_ID,
      pass: PASSWORD,
    },
    secure: true,
  });

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      return false;
    }
  });
  return true;
}

async function validateHuman(token) {
  const secret = "6Lf42r8lAAAAAOIPrTmArfNOXocZ2-WFNxNH0fhG";
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    {
      method: "POST",
    }
  );
  const data = await response.json();
  console.log(data.success, "check-human");

  return data.success;
}
