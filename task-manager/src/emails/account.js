const sgMail = require('@sendgrid/mail');

const sendGridAPIKey = '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'

sgMail.setApiKey(sendGridAPIKey);

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