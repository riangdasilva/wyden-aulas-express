import { sequelize } from "../database"
import { DataTypes } from "sequelize"

export const Course = sequelize.define("Course", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  hours: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
})

Course.sync({ force: true })
