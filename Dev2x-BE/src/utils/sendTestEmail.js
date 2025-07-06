
require('dotenv').config();
const ses = require('./mailer');

async function sendEmail() {
  const params = {
    Source: 'Dev2x <support@dev2x.com>',
    Destination: {
      ToAddresses: ['anilkumarakula34@gmail.com'], // replace with a real email
    },
    Message: {
      Subject: {
        Data: 'Welcome to Dev2x!',
        Charset: 'UTF-8',
      },
      Body: {
        Text: {
          Data: 'Hello! This is a test email sent using AWS SES SDK.',
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
  }
}

sendEmail();
