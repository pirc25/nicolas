import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success?: boolean;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Aquí puedes procesar el mensaje (por ejemplo, enviarlo por correo, almacenarlo, etc.)
    console.log({ name, email, message });

    // Enviar una respuesta de éxito al cliente
    res.status(200).json({ success: true });
  } else {
    // Si el método no es POST, enviar un error
    res.status(405).json({ message: "Método no permitido" });
  }
}
