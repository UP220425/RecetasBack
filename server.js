import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/users", userRoutes);

// Conexión a la base de datos
try {
  await sequelize.authenticate();
  console.log("✅ Conectado correctamente a Railway MySQL");
  await sequelize.sync();
} catch (error) {
  console.error("❌ Error de conexión a Railway:", error);
}

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
