import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, phone, email, subject, message } = body;

    if (!fullName || !phone || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "Champs requis manquants." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${fullName}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `📩 Contact Web: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #1c525d; border-bottom: 2px solid #ff006e; padding-bottom: 8px;">
            Nouveau message reçu depuis le site
          </h2>
          <p><strong>Nom complet :</strong> ${fullName}</p>
          <p><strong>Téléphone :</strong> ${phone}</p>
          <p><strong>E-mail :</strong> ${email}</p>
          <p><strong>Objet :</strong> ${subject}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <h3 style="color: #1c525d;">Message :</h3>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 8px; white-space: pre-line;">
            ${message}
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "E-mail envoyé avec succès !",
    });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail:", error);
    return NextResponse.json(
      { success: false, message: "Échec de l'envoi du message." },
      { status: 500 }
    );
  }
}