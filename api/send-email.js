const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = async (req, res) => {
  const { to, from, subject, text } = req.body;

  const msg = {
    to,
    from,
    subject,
    text,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }

    res.status(500).json({ message: 'Failed to send email', error: error });
  }
};
