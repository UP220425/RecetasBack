import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  provider: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: { // 👈 campo sin encriptar
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default User;
