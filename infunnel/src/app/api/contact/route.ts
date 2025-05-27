import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

// Esquema de validación con Zod
const ContactSchema = z.object({
  nombre: z.string().min(1),
  email: z.string().email(),
  mensaje: z.string().min(1),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = ContactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Campos inválidos" }, { status: 400 });
    }

    const { nombre, email, mensaje } = parsed.data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "fuscaelianam@gmail.com",
        pass: process.env.EMAIL_PASS, // Debe estar en tu .env
      },
    });

    const mailOptions = {
      from: `"INFUNNEL Contacto" <${
        process.env.EMAIL_USER || "fuscaelianam@gmail.com"
      }>`,
      to: process.env.EMAIL_TO || "fuscaelianam@gmail.com", // Destino inicial
      subject: "Nuevo mensaje de contacto desde INFUNNEL",
      html: `
        <h2>Nuevo mensaje desde el formulario de contacto</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error al enviar el mensaje:", error);
    return NextResponse.json(
      { error: "Error interno al enviar el mensaje." },
      { status: 500 }
    );
  }
}
