import { Router } from "express"

import { classroomSchema, validateSchema } from "../middlewares/validations"

import {
  createClassroom,
  readClassrooms,
  readClassroom,
  updateClassroom,
  deleteClassroom,
} from "../controllers/classrooms"
import { authenticateUser } from "../middlewares/auth"

const router = Router()

router.post(
  "/",
  authenticateUser,
  classroomSchema,
  validateSchema,
  createClassroom
)
router.get("/", readClassrooms)
router.get("/:id", readClassroom)
router.put(
  "/:id",
  authenticateUser,
  classroomSchema,
  validateSchema,
  updateClassroom
)
router.delete("/:id", authenticateUser, deleteClassroom)

export default router
