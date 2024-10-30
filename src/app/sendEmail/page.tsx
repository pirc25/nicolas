"use client";

import { useState } from "react";

export default function EmailTest() {
  const [emailStatus, setEmailStatus] = useState<string>("");

  const sendEmail = async () => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "richardburneo24@gmail.com",
          subject: "Asunto del correo",
          text: "Este es el cuerpo del correo.",
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setEmailStatus("Correo enviado exitosamente.");
      } else {
        setEmailStatus(`Error al enviar el correo: ${data.error}`);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setEmailStatus("Error al enviar el correo.");
    }
  };

  return (
    <div>
      <h1>Probar Envío de Correo</h1>
      <button onClick={sendEmail}>Enviar Correo</button>
      {emailStatus && <p>{emailStatus}</p>}
    </div>
  );
}
