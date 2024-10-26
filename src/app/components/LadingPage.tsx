// src/app/components/LandingPage.tsx
"use client";

import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  TextField,
  Select,
  Box,
  Paper,
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  Slide,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import "./LandingPage.css";
import ContactForm from "./ContactForm";

const nacionalidades = [
  "Argentina",
  "Boliviana",
  "Chilena",
  "Colombiana",
  "Costa Riquense",
  "Cubano",
  "Ecuadotoriano",
  "Salvadoreño",
  "Guatemalteco",
  "Hondureño",
  "Mexicano",
  "Nicaraguense",
  "Panameña",
  "Paraguayense",
  "Peruana",
  "Dominicana",
  "Uruguaya",
  "Venezolana",
];

const paisesResidencia = [
  "Argentina",
  "Bolivia",
  "Chile",
  "Colombia",
  "Costa Rica",
  "Cuba",
  "Ecuador",
  "El Salvador",
  "Guatemala",
  "Honduras",
  "México",
  "Nicaragua",
  "Panamá",
  "Paraguay",
  "Perú",
  "República Dominicana",
  "Uruguay",
  "Venezuela",
];

import Imagen1 from "../../assets/salamanca1.jpg";

const LandingPage = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [mensajeEnviado, setMensajeEnviado] = useState<boolean>(false);
  const [nacionalidad, setNacionalidad] = useState("");
  const [paisResidencia, setPaisResidencia] = useState("");

  const hanleShowForm = () => {
    setShowForm(true);
  };

  const hanleSubmit = () => {
    setMensajeEnviado(true);
  };

  const handleNacionalidadChange = (event: SelectChangeEvent<string>) => {
    setNacionalidad(event.target.value as string);
  };

  const handlePaisResidenciaChange = (event: SelectChangeEvent<string>) => {
    setPaisResidencia(event.target.value as string);
  };

  return (
    <Container
      sx={{
        textAlign: "center",
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        gap: "50px",
      }}
    >
      <Box
        component={Paper}
        sx={{
          height: "auto",
          width: "95%",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "30px",
          backgroundColor: "#f4f4f9",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          margintTop: "200px",

          // backgroundImage: "url('../../../assets/fondo1.jpg')",
        }}
      >
        <Grid container spacing={1} sx={{ width: "100%" }}>
          <Grid size={12}>
            <Typography
              variant="h3"
              component="h3"
              gutterBottom
              sx={{
                fontFamily: "'Merriweather', serif",
                fontWeight: "bold",
                color: "#003366" /* Color serio, profesional */,
                textAlign: "center",
                // textTransform: "uppercase",
                letterSpacing: "2px",
                marginBottom: "2rem",
                lineHeight: "1.2",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                WebkitTextStroke: "0.5px #003366",
                transition: "all 0.3s ease-in-out",
                animation: "fadeIn 2s ease-in-out",
                "@keyframes fadeIn": {
                  "0%": { opacity: 0, transform: "translateY(-20px)" },
                  "100%": { opacity: 1, transform: "translateY(0)" },
                },
                "&:hover": {
                  color: "#001f4d", // Efecto hover
                  transform: "scale(1.05)",
                },
                fontSize: {
                  xs: "1.5rem", // Tamaño para pantallas pequeñas (celulares)
                  sm: "2rem", // Tamaño para pantallas medianas (tabletas)
                  md: "2.5rem", // Tamaño para pantallas grandes (computadoras)
                },
              }}
            >
              De Latinoamérica a Salamanca: <br></br>¡Haz realidad tu sueño
              académico!
            </Typography>
            {/*           
              // variant="h3"
              // component="h1"
              // gutterBottom
              // sx={{
              //   fontFamily: "Oswald, sans-serif",
              //   fontSize: "4rem",
              //   fontWeight: "700",
              //   color: "#0077FF",
              //   textTransform: "uppercase",
              //   letterSpacing: "2px",
              //   marginBottom: "1.5rem",
              }} */}
            {/* >
              De Latinoamérica a Salamanca: ¡Haz realidad tu sueño académico! */}
          </Grid>
          <Grid size={12}>
            <Box
              className="image-container"
              sx={{
                marginLeft: "auto", // Añadir auto para centrar horizontalmente
                marginRight: "auto", // Añadir auto para centrar horizontalmente
                display: "flex",
                justifyContent: "center", // Centrar la imagen
                width: { xs: "90%", sm: "80%", md: "100%" }, // Ajusta el ancho según el tamaño de la pantalla
                height: "auto", // Mantener la proporción de la imagen
              }}
            >
              <Image
                src="/assets/salamanca1.jpg"
                alt="Salamanca"
                width={500} // Aumentar el ancho
                height={300} // Aumentar la altura
                style={{
                  maxWidth: "100%", // Asegura que no exceda el ancho de la pantalla
                  height: "auto", // Mantiene la proporción
                }}
              />
            </Box>
          </Grid>
          <Grid size={12}>
            <Typography
              variant="h5"
              component="p"
              gutterBottom
              sx={{
                fontFamily: "'Roboto', sans-serif",
                fontSize: "1rem",
                fontWeight: 400,
                color: "#333333", // Un gris oscuro suave y legible
                lineHeight: 1.6,
                marginBottom: "1rem",
              }}
            >
              ¡Estudia en Salamanca y vive una experiencia única! Especialmente
              para estudiantes latinoamericanos, descubre la historia, cultura y
              excelencia académica de esta ciudad universitaria. ¡Tu futuro te
              espera en Salamanca!
            </Typography>
          </Grid>
          <Grid size={12}>
            {/* <section id="benefits">
              <Typography
                sx={{
                  fontFamily: "Oswald, sans-serif",
                  fontSize: "2rem",
                  fontWeight: "700",
                  color: "0077FF !important.--",
                }}
              >
                <h2>¿Por qué Salamanca?</h2>
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Roboto', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 400,
                  color: "#333333", // Un gris oscuro suave y legible
                  lineHeight: 1.6,
                  marginBottom: "1rem",
                }}
              >
                <ul>
                  <li>🌍 Haz amigos de todo el mundo</li>
                  <li>📚 Educación de calidad</li>
                  <li>🎉 Cultura y diversión a cada paso</li>
                  <li>📝 Soporte completo en trámites</li>
                </ul>
              </Typography>
            </section>{" "} */}
          </Grid>
          <Grid size={12}>
            {!showForm && (
              <Button
                variant="contained"
                color="primary"
                sx={{
                  margin: "1rem",
                  borderRadius: "30px",
                  padding: "10px 20px",
                }}
                onClick={hanleShowForm}
              >
                ¡Comienza tu aventura!
              </Button>
            )}
          </Grid>
        </Grid>
      </Box>
      {showForm && (
        <ContactForm />
        // <Box
        //   component={Paper}
        //   sx={{
        //     height: "auto",
        //     width: "95%",
        //     padding: "2rem",
        //     display: "flex",
        //     flexDirection: "column",
        //     alignItems: "center",
        //     borderRadios: "30px",
        //     backgroundColor: "#f4f4f9", // Color de fondo más suave
        //     boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Sombra más definida }}
        //   }}
        // >
        //   <Typography variant="h6" component="h2" gutterBottom>
        //     Ingresa tu información para que te contactemos y comiences esta
        //     travesía.<br></br>
        //   </Typography>
        //   <form>
        //     <Grid container spacing={2} sx={{ width: "100%" }}>
        //       <Grid size={12}>
        //         <TextField
        //           label="Tu nombre"
        //           variant="outlined"
        //           fullWidth
        //           required
        //         />
        //       </Grid>
        //       <Grid size={12}>
        //         <TextField
        //           label="Apellidos"
        //           variant="outlined"
        //           fullWidth
        //           required
        //         />
        //       </Grid>
        //       <Grid size={12}>
        //         <TextField
        //           label="Tu correo"
        //           variant="outlined"
        //           type="email"
        //           fullWidth
        //           required
        //         />
        //       </Grid>
        //       <Grid size={12}>
        //         <TextField
        //           label="Número de whatsApp"
        //           variant="outlined"
        //           fullWidth
        //           required
        //         />
        //       </Grid>
        //       <Grid size={12}>
        //         <FormControl fullWidth variant="outlined" required>
        //           <InputLabel>Nacionalidad</InputLabel>
        //           <Select
        //             value={nacionalidad}
        //             onChange={handleNacionalidadChange}
        //             label="Nacionalidad"
        //           >
        //             {nacionalidades.map((nacion) => (
        //               <MenuItem key={nacion} value={nacion}>
        //                 {nacion}
        //               </MenuItem>
        //             ))}
        //           </Select>
        //         </FormControl>
        //       </Grid>
        //       <Grid size={12}>
        //         <FormControl fullWidth variant="outlined" required>
        //           <InputLabel>País de residencia</InputLabel>
        //           <Select
        //             value={paisResidencia}
        //             onChange={handlePaisResidenciaChange}
        //             label="País de residencia"
        //           >
        //             {paisesResidencia.map((pais) => (
        //               <MenuItem key={pais} value={pais}>
        //                 {pais}
        //               </MenuItem>
        //             ))}
        //           </Select>
        //         </FormControl>
        //       </Grid>
        //       <Grid size={12}>
        //         <TextField
        //           label="Estudios que desea realizar"
        //           variant="outlined"
        //           fullWidth
        //           multiline
        //           rows={4}
        //           required
        //         />
        //       </Grid>
        //       <Grid size={12}>
        //         <Button
        //           variant="contained"
        //           color="primary"
        //           onClick={hanleSubmit}
        //           sx={{ borderRadius: "30px", padding: "10px 20px" }}
        //         >
        //           Enviar información
        //         </Button>
        //       </Grid>
        //       <Grid size={12}>
        //         {mensajeEnviado && (
        //           <Typography>Información enviado con éxito.</Typography>
        //         )}
        //       </Grid>
        //     </Grid>
        //   </form>
        // </Box>
      )}
    </Container>
  );
};

export default LandingPage;
