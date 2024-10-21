"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      // Hacemos el POST a la API en /api/submitForm
      const response = await axios.post("/api/submitForm", data);
      if (response.data.success) {
        alert("Mensaje enviado exitosamente");
      } else {
        alert("Hubo un problema al enviar el mensaje.");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contáctanos</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("name", { required: "Nombre es requerido" })}
          placeholder="Tu nombre"
        />
        {errors.name && <span>{errors.name.message}</span>}

        <input
          type="email"
          {...register("email", { required: "Correo es requerido" })}
          placeholder="Tu correo"
        />
        {errors.email && <span>{errors.email.message}</span>}

        <textarea
          {...register("message", { required: "Mensaje es requerido" })}
          placeholder="Tu mensaje"
        />
        {errors.message && <span>{errors.message.message}</span>}

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Form;
