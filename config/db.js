import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql", // 🔹 ESTA LÍNEA ES LA QUE FALTABA
    logging: false,   // 🔹 Opcional: quita logs de consola
  }
);

export default sequelize;
