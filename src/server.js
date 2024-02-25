const express = require('express');
const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001; // Make sure this does not conflict with your React app's port

// Set your SendGrid API key here
sgMail.setApiKey('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');

app.use(bodyParser.json());

// CORS Middleware to allow cross-origin requests from your React application
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Adjust this in production
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

// Email sending route
app.post('/send-email', async (req, res) => {
    const { to, from, subject, text } = req.body;

    const msg = {
        to, // Change to your recipient
        from, // Change to your verified sender
        subject,
        text,
    };

    try {
        await sgMail.send(msg);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error(error);

        if (error.response) {
            console.error(error.response.body)
        }

        res.status(500).json({ message: 'Failed to send email', error: error });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
