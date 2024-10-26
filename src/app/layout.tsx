import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import "./globals.css";
import { Box } from "@mui/material";

export const metadata = {
  title: "Estudia en salamanca",
  description: "Ofrecemos servicio de papelo para estuadiar en salamanca",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh", // Cambiado a minHeight para permitir que el contenido crezca
          }}
        >
          {/* Puedes descomentar NavBar si lo necesitas */}
          {/* <NavBar /> */}
          <Box
            component="main"
            sx={{
              flex: 1, // Permite que el contenido ocupe el espacio restante
              padding: "1rem", // Ajusta el padding según sea necesario
            }}
          >
            {children}
          </Box>
          <Footer />
        </Box>

        <div>
          <WhatsAppButton /> {/* O usa <WhatsAppLink /> */}
        </div>
      </body>
    </html>
  );
}
