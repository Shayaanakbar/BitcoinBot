// Library for sendgrid
const sgMail = require('@sendgrid/mail')

// call this AlertController
const sendAlertController = () => {
    // dealing with their API here
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    // create object for config
    const msg = {
        to: 'shayaanakbar@yahoo.com,', // Change to your recipient
        from: 'Shayaanakbar1106@gmail.com', // Change to your verified sender
        subject: 'Bitcoin hit bot price',
        // create method to render Current price and send it in text
        text: 'Bot has hit .01% Variance',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
            // once email successfully sends, use controller method to insert row into database for alert
        })
        .catch((error) => {
            console.error(error)
        })
    // create method to insert row into database with alert information
}

module.exports = sendAlertController;
