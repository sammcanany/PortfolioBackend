const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')

const app = express()
app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body
  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact from ${name}`,
      text: message
    })
    res.status(200).json({ success: true })
  } catch (err) {
    console.log(err)
    res.status(500).json({ success: false, error: err.message })
  }
})

app.listen(5000, () => console.log('Backend running on port 5000'))
