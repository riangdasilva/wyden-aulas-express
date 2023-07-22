import { sequelize } from "../database"
import { DataTypes } from "sequelize"

import { Course } from "./courses"
import { Classroom } from "./classrooms"

export const Class = sequelize.define(
  "Class",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    teacher: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    datetime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
)

Class.belongsTo(Course, { foreignKey: "courseId" })
Class.belongsTo(Classroom, { foreignKey: "classroomId" })

Class.sync()
