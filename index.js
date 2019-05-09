const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
const cors = require('cors');
const config = require('./config/config');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cors());

app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => {
        const htmlEmail = `
            <h3>Contact Details</h3>
            <ul style="list-style: none">
                <li><span style="font-weight: 700;">First Name:</span> ${req.body.fullName}</li>
                <li><span style="font-weight: 700;">Email:</span> ${req.body.emailAddress}</li>
            </ul>
            <h4>Message</h4>
            <p>${req.body.message}</p>
        `
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'kiel.cassin@ethereal.email',
                pass: 'Wpf1avmQMDVa1k5MU8'
            }
        });

        let mailOptions = {
            from: `${req.body.fullName} <${req.body.emailAddress}>`,
            to: 'kiel.cassin@ethereal.email',
            replyTo: req.body.emailAddress,
            subject: `New Message from ${req.body.fullName}`,
            text: req.body.message,
            html: htmlEmail
        }

        transporter.sendMail(mailOptions, function(err, res){
            if (err){
                return console.log(Error);
            } else {
                console.log('Email Sent!');
            }
        })
    })
})

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`);
});
