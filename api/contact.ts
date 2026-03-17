import nodemailer from "nodemailer";

const requestCounts = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 1000; // 1 minute

function getClientIp(req: any): string {
  return (
    (req.headers["x-forwarded-for"] as string)?.split(",")[0].trim() ||
    (req.headers["x-real-ip"] as string) ||
    req.socket?.remoteAddress ||
    "unknown"
  );
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = requestCounts.get(ip);

  if (!record || now > record.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + RATE_WINDOW_MS });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

type Body = {
  name?: string;
  email?: string;
  message?: string;
  website?: string;
};

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const clientIp = getClientIp(req);

  if (!checkRateLimit(clientIp)) {
    return res.status(429).json({ error: "Too many requests. Try again in a minute." });
  }

  const { name, email, message } = (req.body || {}) as Body;
  const honeypot = (req.body?.website || "").trim();

  if (honeypot) {
    console.log("Honeypot triggered from IP:", clientIp);
    return res.status(400).json({ error: "Invalid request." });
  }

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
      error: "Mail server is not configured. Add GMAIL_USER and GMAIL_APP_PASSWORD.",
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
      text: [`Name: ${trimmedName}`, `Email: ${trimmedEmail}`, "", trimmedMessage].join("\n"),
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
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}