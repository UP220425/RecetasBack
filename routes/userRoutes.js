import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Crear usuario (sin cifrado)
router.post("/", async (req, res) => {
  try {
    const { name, email, provider, password } = req.body;

    if (!email || !provider || !password) {
      return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    const user = await User.create({
      name: name || "Usuario",
      email,
      provider,
      password, // 🔸 se guarda tal cual
    });

    res.status(201).json({
      message: "Usuario guardado correctamente",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        provider: user.provider,
      },
    });
  } catch (error) {
    console.error("Error al guardar usuario:", error);
    res.status(500).json({ error: "Error del servidor" });
  }
});

// Obtener usuarios (para pruebas)
router.get("/", async (_req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "name", "email", "provider", "password", "createdAt"],
    });
    res.json(users);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
});

export default router;
