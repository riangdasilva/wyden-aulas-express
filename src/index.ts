import express from "express"

import { PORT } from "./configs"

import authRouter from "./routers/auth"
import coursesRouter from "./routers/courses"
import classroomsRouter from "./routers/classrooms"
import classesRouter from "./routers/classes"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization")

  if (req.method === "OPTIONS") {
    res.status(200).send()
  } else {
    next()
  }
})

app.use("/auth", authRouter)
app.use("/courses", coursesRouter)
app.use("/classrooms", classroomsRouter)
app.use("/classes", classesRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
