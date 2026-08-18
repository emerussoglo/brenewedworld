import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      nom,
      prenom,
      telephone,
      email,
      ville,
      typeProjet,
      budget,
      description,
    } = body;

    if (
      !nom ||
      !prenom ||
      !telephone ||
      !email ||
      !ville ||
      !typeProjet ||
      !budget ||
      !description
    ) {
      return NextResponse.json(
        { success: false, message: "Certains champs obligatoires sont manquants." },
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
      from: `"${prenom} ${nom}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `📋 Demande de Devis: ${typeProjet} (${prenom} ${nom})`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; color: #333; background-color: #f8fafc;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; padding: 30px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
            <h2 style="color: #1c525d; border-bottom: 2px solid #ff006e; padding-bottom: 10px; margin-top: 0;">
              Nouvelle demande de devis
            </h2>

            <h3 style="color: #0f172a; margin-top: 20px;">👤 Informations du client</h3>
            <p><strong>Nom complet :</strong> ${prenom} ${nom}</p>
            <p><strong>Téléphone :</strong> ${telephone}</p>
            <p><strong>E-mail :</strong> ${email}</p>
            <p><strong>Ville / Localisation :</strong> ${ville}</p>

            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />

            <h3 style="color: #0f172a;">🏗️ Détails du projet</h3>
            <p><strong>Type de projet :</strong> ${typeProjet}</p>
            <p><strong>Budget estimatif :</strong> ${budget}</p>

            <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />

            <h3 style="color: #0f172a;">📝 Description du besoin</h3>
            <p style="background: #f1f5f9; padding: 15px; border-radius: 8px; white-space: pre-line; line-height: 1.6;">
              ${description}
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Demande de devis envoyée avec succès !",
    });
  } catch (error) {
    console.error("Erreur lors de l'envoi du devis:", error);
    return NextResponse.json(
      { success: false, message: "Une erreur est survenue lors de l'envoi." },
      { status: 500 }
    );
  }
}