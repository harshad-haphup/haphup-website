require('dotenv').config()
let nodemailer = require('nodemailer')

const EMAIL_ID = process.env.EMAIL_ID
const PASSWORD = process.env.PASSWORD

export default function handler(req, res) {
  
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }

  console.log("data from client",req.body)

  const transporter = nodemailer.createTransport({ 
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: EMAIL_ID,
      pass: PASSWORD
    },
    secure: true,});

    const {name, email, job_profile, linkedin_profile} = req.body;

    const mailData = {
      from: EMAIL_ID,
      to: EMAIL_ID,
      subject: `New Career Alert | ${name}`,
      text: " By : " + email,
      html: `<h2 style="border-bottom:2px solid black;padding:10px">Your Alert For <span style="font-weight:700">Join Us</span></h2><p>Name - <span style="font-weight:700">${name}</span></p><p>Applying For - <span style="font-weight:700">${job_profile}</span></p><p>Email - <span style=color:grey>${email}</span></p><a href=https://www.linkedin.com/in/${linkedin_profile}>LinkedIn Profile</a>`
     }

  transporter.sendMail(mailData, function (err, info) {
    if(err)
      res.status(500).send({ status: 'failed', message: 'Mail Not Sent Successfully' })
    else
      res.status(200).json({ status: 'success', msg: "Mail Sent Successfully" })
    })
  
}
