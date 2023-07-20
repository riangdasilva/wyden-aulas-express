import { Router } from "express"

import { validateClassroom } from "../middlewares/validations"

import {
  createClassroom,
  readClassrooms,
  readClassroom,
  updateClassroom,
  deleteClassroom,
} from "../controllers/classrooms"

const router = Router()

router.post("/", validateClassroom, createClassroom)
router.get("/", readClassrooms)
router.get("/:id", readClassroom)
router.put("/:id", validateClassroom, updateClassroom)
router.delete("/:id", deleteClassroom)

export default router
