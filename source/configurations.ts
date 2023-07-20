import dotenv from "dotenv"

dotenv.config()

export const PORT = 3000
export const DB_URI = process.env.DB_URI || ""
