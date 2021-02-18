const sgMail = require('@sendgrid/mail');

const sendGridAPIKey = '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'

sgMail.setApiKey(sendGridAPIKey);

sgMail.send({
    to: 'taejin5314@gmail.com',
    from: 'taejin5314@gmail.com',
    subject: 'This is my first creation!',
    text: 'I hope this one actually get to you.'
})