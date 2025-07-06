require('dotenv').config();
const ses = require('./mailer');

async function sendEmail({ to, subject, html }) {
  const params = {
    Source: 'Dev2x <support@dev2x.com>',
    Destination: {
      ToAddresses: [to],
    },
    Message: {
      Subject: {
        Data: subject,
        Charset: 'UTF-8',
      },
      Body: {
        Html: {
          Data: html,
          Charset: 'UTF-8',
        },
      },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log('✅ Email sent! Message ID:', result.MessageId);
  } catch (err) {
    console.error('❌ Error sending email:', err);
    throw err;
  }
}

module.exports = sendEmail;
