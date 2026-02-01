import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "All fields are required." });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER,
            subject: subject,
            html: `
                <h3>New Contact Message</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        });

        res.status(200).json({ success: true, message: "Message sent!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Email failed to send." });
    }
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
    console.log(process.env.EMAIL_USER);
    console.log(process.env.EMAIL_PASS);
});