// src/app/_app.tsx
import React from "react";
import { AppProps } from "next/app";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "../styles/globals.css"; // Importa estilos globales si es necesario

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Color principal
    },
  },
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Estilos globales de Material-UI */}
      <Component {...pageProps} /> {/* Renderiza la página correspondiente */}
    </ThemeProvider>
  );
};

export default MyApp;
