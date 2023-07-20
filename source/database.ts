import { Sequelize } from "sequelize"

import { DB_URI } from "./configurations"

export const sequelize = new Sequelize(DB_URI, {})
