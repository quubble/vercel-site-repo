import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import fs from "fs"
import path from "path"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const company = formData.get("company") as string
    const message = formData.get("message") as string
    const file = formData.get("file") as File | null

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    // Validate file size (2MB limit)
    if (file && file.size > 2 * 1024 * 1024) {
      return NextResponse.json({ error: "File size must be less than 2MB" }, { status: 400 })
    }

    // Validate file type (only text files)
    if (file && !file.type.startsWith("text/")) {
      return NextResponse.json({ error: "Only text files are allowed" }, { status: 400 })
    }

    // Create contact data object
    const contactData = {
      id: Date.now().toString(),
      name,
      email,
      company: company || "",
      message,
      fileName: file?.name || null,
      fileSize: file?.size || null,
      timestamp: new Date().toISOString(),
    }

    // Save to JSON file
    const dataDir = path.join(process.cwd(), "data")
    const contactsFile = path.join(dataDir, "contacts.json")

    // Ensure data directory exists
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true })
    }

    // Read existing contacts or create empty array
    let contacts = []
    if (fs.existsSync(contactsFile)) {
      const fileContent = fs.readFileSync(contactsFile, "utf-8")
      contacts = JSON.parse(fileContent)
    }

    // Add new contact
    contacts.push(contactData)

    // Write back to file
    fs.writeFileSync(contactsFile, JSON.stringify(contacts, null, 2))

    // Save uploaded file if exists
    if (file) {
      const uploadsDir = path.join(process.cwd(), "uploads")
      if (!fs.existsSync(uploadsDir)) {
        fs.mkdirSync(uploadsDir, { recursive: true })
      }

      const fileBuffer = Buffer.from(await file.arrayBuffer())
      const fileName = `${contactData.id}_${file.name}`
      fs.writeFileSync(path.join(uploadsDir, fileName), fileBuffer)
    }

    // Send email notification
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number.parseInt(process.env.SMTP_PORT || "465"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        ${file ? `<p><strong>Attached File:</strong> ${file.name} (${(file.size / 1024).toFixed(2)} KB)</p>` : ""}
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: "Contact form submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Failed to submit contact form" }, { status: 500 })
  }
}
