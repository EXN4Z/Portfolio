export const runtime = "nodejs";

import nodemailer from "nodemailer";

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
    try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
        return Response.json({ error: "Invalid data" }, { status: 400 });
    }

    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;

    if (!EMAIL_USER || !EMAIL_PASS) {
        return Response.json(
        { error: "Missing EMAIL_USER / EMAIL_PASS in env" },
        { status: 500 }
        );
    }

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
        },
    });

    const safeName = escapeHtml(String(name));
    const safeEmail = escapeHtml(String(email));
    const safeMsg = escapeHtml(String(message)).replace(/\n/g, "<br/>");

    await transporter.sendMail({
      from: `"Portfolio Contact" <${EMAIL_USER}>`,
      to: EMAIL_USER,
      replyTo: safeEmail,
      subject: `New Contact from ${safeName}`,
      html: `
        <h2>New Contact Message</h2>
        <p><b>Name:</b> ${safeName}</p>
        <p><b>Email:</b> ${safeEmail}</p>
        <p><b>Message:</b></p>
        <p>${safeMsg}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (err: any) {
    console.error(err);

    const reason =
      process.env.NODE_ENV !== "production"
        ? (err?.message ?? String(err))
        : undefined;

    return Response.json(
      { error: "Failed to send email", reason },
      { status: 500 }
    );
  }
}
