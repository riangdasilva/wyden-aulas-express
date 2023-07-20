import express from "express"

import { PORT } from "./configurations"

import coursesRouter from "./routers/courses"
import classroomsRouter from "./routers/classrooms"
import classesRouter from "./routers/classes"

const app = express()

app.use(express.json())

app.use("/courses", coursesRouter)
app.use("/classrooms", classroomsRouter)
app.use("/classes", classesRouter)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
