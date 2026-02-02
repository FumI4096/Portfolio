import express from 'express';
import cors from 'cors';
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors({
    origin: 'https://seimon.vercel.app', 
    methods: ['GET', 'POST'],
    credentials: true
}));
app.use(express.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.get('/', (req, res) => {
    res.json({ message: 'Portfolio API is running!' });
});

app.post("/api/contact", async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // SendGrid email configuration
        const msg = {
            to: process.env.EMAIL_USER, // Your verified sender email
            from: process.env.EMAIL_USER, // Must match your verified sender in SendGrid
            replyTo: email, // User's email so you can reply to them directly
            subject: `Portfolio Contact: ${subject}`,
            html: `
                <h3>New Contact Message</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        };

        // Send email via SendGrid
        await sgMail.send(msg);

        res.status(200).json({ success: true, message: "Message sent!" });
    } catch (error) {
        console.error('SendGrid Error:', error);
        if (error.response) {
            console.error('Error details:', error.response.body);
        }
        res.status(500).json({ success: false, message: "Email failed to send." });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});