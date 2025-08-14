import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const file = formData.get("file");
    // Validate
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // File validation
    if (file && file.size > 2 * 1024 * 1024) {
      return NextResponse.json({ error: "File too large" }, { status: 400 });
    }
    if (file && !file.type.startsWith("text/")) {
      return NextResponse.json({ error: "Only text files allowed" }, { status: 400 });
    }

    // Save contact data (omitted for brevity)

    // Prepare transporter (Gmail example, see above for options)
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use 'service' when possible
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Prepare mail options
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
      // Attach the uploaded file if needed
      attachments: file ? [{
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
        contentType: file.type,
      }] : [],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Contact form submitted successfully" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to submit contact form" }, { status: 500 });
  }
}
