require('dotenv').config()
let nodemailer = require('nodemailer')

const EMAIL_ID = process.env.EMAIL_ID
const PASSWORD = process.env.PASSWORD

export default function handler(req, res) {
  
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }

  // console.log("data from client",req.body)

  const {name,email,msg} = req.body;

  const transporter = nodemailer.createTransport({ 
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: EMAIL_ID,
      pass: PASSWORD
    },
    secure: true,});

    const mailData = {
      from: EMAIL_ID,
      to: EMAIL_ID,
      subject: `New Contact us Alert | ${name}`,
      text: " By : " + email,
      html: `<h2 style="border-bottom:2px solid black;padding:10px">Your Alert For <span style="font-weight:700">Contact Us</span></h2><p>Name - <span style="font-weight:700">${name}</span></p>Email - <span style=color:grey>${email}</span></p><p style=background:#e7e7e7;padding:20px;border-radius:5px;font-size:16px>${msg}</p>`
     }

  transporter.sendMail(mailData, function (err, info) {
    if(err)
      res.status(500).send({ status: 'failed', message: 'Mail Not Sent Successfully' })
    else
      res.status(200).json({ status: 'success', msg: "Mail Sent Successfully" })
    })
  
}
