const sgMail = require('@sendgrid/mail')

const sendAlertController = () => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: 'Shayaanakbar1106@gmail.com', // Change to your recipient
        from: 'Shayaanakbar1106@gmail.com', // Change to your verified sender
        subject: 'Bitcoin hit bot price',
        text: 'Bot has hit .01% Variance',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
}

module.exports = sendAlertController;
