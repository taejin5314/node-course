const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'taejin5314@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'taejin5314@gmail.com',
        subject: 'Cancellation confirm mail',
        text: `Thank you for using our sevice ${name}!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}