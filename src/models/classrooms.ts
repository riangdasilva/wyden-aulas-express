import { sequelize } from "../database"
import { DataTypes } from "sequelize"

export const Classroom = sequelize.define("Classroom", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  building: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  floor: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  room: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
})

Classroom.sync({ force: true })
