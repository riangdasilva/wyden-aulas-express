import { Sequelize } from "sequelize"

import { DB_URI } from "./configs"

export const sequelize = new Sequelize(DB_URI, {})
