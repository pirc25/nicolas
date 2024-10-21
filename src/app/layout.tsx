import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import "./globals.css";

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
      <div>
        {/* <NavBar /> */}
        <body>{children}</body>
        <Footer />
        <div>
          <WhatsAppButton /> {/* O usa <WhatsAppLink /> */}
        </div>
      </div>
    </html>
  );
}
