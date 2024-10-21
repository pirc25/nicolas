// src/app/components/LandingPage.tsx
"use client";

import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  TextField,
  Box,
  Paper,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

import Imagen1 from "../../assets/salamanca1.jpg";

const LandingPage = () => {
  const [showForm, setShowForm] = useState<boolean>(false);

  const hanleShowForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <Container
      sx={{
        textAlign: "center",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          height: "auto",
          width: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // backgroundImage: "url('../../../assets/fondo1.jpg')",
        }}
      >
        <Grid container spacing={1}>
          <Grid size={12}>
            <Typography
              variant="h3"
              component="h1"
              gutterBottom
              sx={{
                fontFamily: "Oswald, sans-serif",
                fontSize: "4rem",
                fontWeight: "700",
                color: "#0077FF",
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginBottom: "1.5rem",
              }}
            >
              ¡Estudia en Salamanca!
            </Typography>
          </Grid>
          <Grid size={12}>
            <Image
              src="/assets/salamanca1.jpg"
              alt="Salamanca"
              width={500}
              height={300}
            />{" "}
          </Grid>
          <Grid size={2}></Grid>
          <Grid size={8}>
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
              Descubre la experiencia única de estudiar en el corazón de Europa.
              Conoce una nueva cultura, haz amigos de todo el mundo y mejora tu
              futuro.
            </Typography>
          </Grid>
          <Grid size={12}>
            <Button
              variant="contained"
              color="primary"
              sx={{ margin: "1rem" }}
              onClick={hanleShowForm}
            >
              ¡Comienza tu aventura!
            </Button>
          </Grid>
        </Grid>
      </Box>
      {showForm && (
        <Box
          component={Paper}
          sx={{ padding: "2rem", marginTop: "2rem", width: "75%" }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Ingresa tu información para contactarnos contigo e inicies está
            travesia<br></br>
          </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid size={12}>
                <TextField
                  label="Tu nombre"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  label="Apellidos"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  label="Tu correo"
                  variant="outlined"
                  type="email"
                  fullWidth
                  required
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  label="Número de whatsApp"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  label="Nacionalidad"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  label="País de residencia"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid size={12}>
                <TextField
                  label="Estudios que desea realizar"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  required
                />
              </Grid>
              <Grid size={12}>
                <Button variant="contained" color="primary" type="submit">
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      )}
    </Container>
  );
};

export default LandingPage;
