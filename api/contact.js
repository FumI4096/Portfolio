import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors({
    origin: 'https://seimon.vercel.app', 
    methods: ['GET', 'POST'],
    credentials: true
}));
app.use(express.json());

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

app.post("/api/contact", async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // 2. Set up Email Options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `Portfolio Contact: ${subject}`,
            text: `Message from ${name} (${email}): ${message}`,
            html: `<h3>New Contact Message</h3>
                   <p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong> ${message}</p>`,
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