const nodemailer = require('nodemailer')
const Users = require('../models/Users')

class MailService {


    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }
    async sendActivationMail(to, link, payload) {
        console.log(payload.username)
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject: 'Активация аккаунта на сервисе ' + process.env.API_URL,
            text: '',
            html:
                `
            <div>
                <h1>Для активации аккаунта перейдите на </h1>
                <a href="${link}>${link}</a>          
            </div>
            `
        })
    }

    

}

module.exports = new MailService()