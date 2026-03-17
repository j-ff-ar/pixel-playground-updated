import "dotenv/config";

import express, { type Request, type Response } from "express";
import nodemailer from "nodemailer";

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req: Request, res: Response) => {
  res.json({ ok: true });
});

app.post("/api/contact", async (req: Request, res: Response) => {
  const { name, email, message } = req.body as {
    name?: string;
    email?: string;
    message?: string;
  };

  const trimmedName = name?.trim();
  const trimmedEmail = email?.trim();
  const trimmedMessage = message?.trim();

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);
  if (!isValidEmail) {
    return res.status(400).json({ error: "Please enter a valid email address." });
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    return res.status(500).json({
      error: "Mail server is not configured. Add GMAIL_USER and GMAIL_APP_PASSWORD to .env.",
    });
  }

  const recipientEmail = process.env.CONTACT_TO_EMAIL || "smjaffarh@gmail.com";

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: recipientEmail,
      replyTo: trimmedEmail,
      subject: `Portfolio contact from ${trimmedName}`,
      text: [
        `Name: ${trimmedName}`,
        `Email: ${trimmedEmail}`,
        "",
        trimmedMessage,
      ].join("\n"),
      html: `
        <h2>New portfolio contact</h2>
        <p><strong>Name:</strong> ${escapeHtml(trimmedName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(trimmedEmail)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(trimmedMessage).replace(/\n/g, "<br />")}</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact form email", error);
    return res.status(500).json({ error: "Could not send message right now." });
  }
});

app.listen(port, () => {
  console.log(`Contact mail server listening on http://localhost:${port}`);
});

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}