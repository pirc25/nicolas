// src/app/api/sendEmail/route.js
import nodemailer from "nodemailer";

export async function POST(request) {
  console.log("Ingreso");
  const {
    user_name,
    user_apellidos,
    user_email,
    user_whatsapp,
    nacionalidad,
    paisResidencia,
    estudios,
  } = await request.json();

  // Configurar el transporte de Nodemailer
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rchrdbrneo@gmail.com", // Reemplaza con tu correo
      pass: "072571346", // Reemplaza con la contraseña del correo o una clave de aplicación
    },
  });

  const message = `Detalles del usuario:
  Nombre: ${user_name}
  Apellidos: ${user_apellidos}
  Correo: ${user_email}
  WhatsApp: ${user_whatsapp}
  Nacionalidad: ${nacionalidad}
  País de Residencia: ${paisResidencia}
  Estudios: ${estudios}
  `;

  try {
    // Enviar correo al dueño de la app
    await transporter.sendMail({
      from: user_email,
      to: "rchrdbrneo@gmail.com", // Reemplaza con tu correo como dueño de la app
      subject: `Nuevo mensaje de ${user_name}`,
      text: message,
      html: `<p>Has recibido un nuevo mensaje de ${user_name} (${user_email}):</p><p>${message}</p>`,
    });

    // Enviar correo de confirmación al usuario
    await transporter.sendMail({
      from: "rchrdbrneo@gmail.com", // Reemplaza con tu correo como remitente
      to: user_email,
      subject: "Gracias por contactarnos",
      text: "Gracias por tu mensaje, nos pondremos en contacto contigo pronto.",
      html: `<p>Hola ${user_name},</p><p>Gracias por contactarnos. Pronto te responderemos.</p>`,
    });

    return new Response(
      JSON.stringify({ message: "Correos enviados con éxito" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error al enviar correos:", error);
    return new Response(
      JSON.stringify({ message: "Error al enviar correos" }),
      { status: 500 }
    );
  }
}
