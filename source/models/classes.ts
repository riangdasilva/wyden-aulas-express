import { sequelize } from "../database"
import { DataTypes } from "sequelize"

export const Class = sequelize.define("Class", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  course: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  teacher: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  classroom: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
})

Class.sync({ force: true })
