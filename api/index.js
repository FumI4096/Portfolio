import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { rateLimit } from 'express-rate-limit';

dotenv.config();

const app = express();

app.set('trust proxy', 1);


app.use(cors({
    origin: 'https://seimon.vercel.app', 
    methods: ['GET', 'POST'],
    credentials: true
}));
app.use(express.json({ limit: '10kb' }));

const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: {
        success: false,
        message: "Too many messages sent. Please try again later."
    },
    standardHeaders: true,
    legacyHeaders: false,
});

const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
    },
});

app.get('/api', (req, res) => {
    res.json({ message: 'Portfolio API is running!' });
});

const escapeHtml = (unsafe) => {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
};

app.post("/api/contact", contactLimiter, async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const cleanName = escapeHtml(name);
        const cleanEmail = escapeHtml(email);
        const cleanSubject = escapeHtml(subject);
        const cleanMessage = escapeHtml(message).replace(/\n/g, '<br>');

        // 2. Set up Email Options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `Portfolio Contact: ${cleanSubject}`,
            text: `Message from ${name} (${email}):\n\n${message}`,
            html: `<h3>New Contact Message</h3>
                   <p><strong>Name:</strong> ${cleanName}</p>
                   <p><strong>Email:</strong> ${cleanEmail}</p>
                   <p><strong>Message:</strong></p>
                   <p>${cleanMessage}</p>`,
        };

        // 3. Send Email
        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true, message: "Message sent!" });
    } catch (error) {
        console.error('Nodemailer Error:', error);
        res.status(500).json({ success: false, message: "Email failed to send." });
    }
});

// IMPORTANT: Export the app for Vercel
export default app;
