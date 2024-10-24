import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem,
} from "@mui/material";

interface FormData {
  user_name: string;
  user_apellidos: string;
  user_email: string;
  user_whatsapp: string;
  estudios: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_apellidos: "",
    user_email: "",
    user_whatsapp: "",
    estudios: "",
  });

  const [nacionalidad, setNacionalidad] = useState("");
  const [paisResidencia, setPaisResidencia] = useState("");
  const [mensajeEnviado, setMensajeEnviado] = useState(false);

  const nacionalidades = ["Ecuadoriana", "Colombiana", "Peruana"]; // Ejemplo de nacionalidades
  const paisesResidencia = ["Ecuador", "Colombia", "Perú"]; // Ejemplo de países de residencia

  const handleNacionalidadChange = (event: SelectChangeEvent<string>) => {
    setNacionalidad(event.target.value);
  };

  const handlePaisResidenciaChange = (event: SelectChangeEvent<string>) => {
    setPaisResidencia(event.target.value);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Estoy en la funcion click", e);
    console.log(formData);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name: formData.user_name,
          user_apellidos: formData.user_apellidos,
          user_email: formData.user_email,
          user_whatsapp: formData.user_whatsapp,
          nacionalidad,
          paisResidencia,
          estudios: formData.estudios,
        }),
      });

      if (response.ok) {
        setMensajeEnviado(true);
        setFormData({
          user_name: "",
          user_apellidos: "",
          user_email: "",
          user_whatsapp: "",
          estudios: "",
        });
        setNacionalidad("");
        setPaisResidencia("");
      } else {
        throw new Error("Error al enviar el formulario");
      }
    } catch (error) {
      console.error(error);
      alert("Ocurrió un error al enviar la información. Intenta nuevamente.");
    }
  };

  return (
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
      }}
    >
      <Typography variant="h6" component="h2" gutterBottom>
        Ingresa tu información para que te contactemos y comiences esta
        travesía.
        <br />
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} sx={{ width: "100%" }}>
          <Grid item xs={12}>
            <TextField
              name="user_name"
              label="Tu nombre"
              variant="outlined"
              fullWidth
              value={formData.user_name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="user_apellidos"
              label="Apellidos"
              variant="outlined"
              fullWidth
              value={formData.user_apellidos}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="user_email"
              label="Tu correo"
              variant="outlined"
              type="email"
              fullWidth
              value={formData.user_email}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="user_whatsapp"
              label="Número de WhatsApp"
              variant="outlined"
              fullWidth
              value={formData.user_whatsapp}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined" required>
              <InputLabel>Nacionalidad</InputLabel>
              <Select
                value={nacionalidad}
                onChange={handleNacionalidadChange}
                label="Nacionalidad"
              >
                {nacionalidades.map((nacion) => (
                  <MenuItem key={nacion} value={nacion}>
                    {nacion}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth variant="outlined" required>
              <InputLabel>País de residencia</InputLabel>
              <Select
                value={paisResidencia}
                onChange={handlePaisResidenciaChange}
                label="País de residencia"
              >
                {paisesResidencia.map((pais) => (
                  <MenuItem key={pais} value={pais}>
                    {pais}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="estudios"
              label="Estudios que desea realizar"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={formData.estudios}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ borderRadius: "30px", padding: "10px 20px" }}
            >
              Enviar información
            </Button>
          </Grid>
          <Grid item xs={12}>
            {mensajeEnviado && (
              <Typography>Información enviada con éxito.</Typography>
            )}
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default ContactForm;
