"use client";

import React from "react";
import { Button } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import CaraNico from "../../../public/assets/nicolas.png";

const WhatsAppButton = () => {
  return (
    <div className="App">
      <FloatingWhatsApp
        phoneNumber="593979253802" // Tu número de WhatsApp
        accountName="Nicolás - Asesor de Estudios"
        statusMessage="¡Responde en menos de una hora!"
        chatMessage="¡Hola! 👋 ¿Listo/a para conocer las oportunidades de estudiar en Salamanca? Escríbeme tu nombre y qué te gustaría estudiar para poder ayudarte."
        placeholder="Escribe tu nombre y qué deseas estudiar..."
        avatar={CaraNico.src} // Usamos una imagen personalizada
        allowClickAway // Permite cerrar el chat al hacer clic fuera
        allowEsc // Permite cerrar el chat con la tecla Esc
        notification // Activa la burbuja de notificación
        notificationSound // Sonido de notificación
        style={{ zIndex: 1000 }} // Para asegurarnos de que siempre esté visible
      />
      {/*    // // <Button
    //   variant="contained"
    //   color="primary"
    //   startIcon={<WhatsAppIcon />}
    //   href="https://wa.me/593979253802?text=Hola,%20estoy%20interesado%20en%20los%20servicios%20para%20estudiar%20en%20Salamanca"
    //   target="_blank" // Abre el enlace en una nueva pestaña
    // >
    //   Contáctanos por WhatsApp
 </Button> */}
    </div>
  );
};

export default WhatsAppButton;

/**
 * Repo: https://github.com/awran5/react-floating-whatsapp
 */
