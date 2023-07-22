import { sequelize } from "../database"
import { DataTypes, Model } from "sequelize"

interface UserAttributes extends Model {
  id: number
  username: string
  password: string
}

export const User = sequelize.define<UserAttributes>(
  "Users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
)

User.sync()
