import { Router } from "express"

import { authenticateUser } from "../middlewares/auth"
import { classSchema, validateSchema } from "../middlewares/validations"

import {
  createClass,
  readClasses,
  readClass,
  updateClass,
  deleteClass,
} from "../controllers/classes"

const router = Router()

router.post("/", authenticateUser, classSchema, validateSchema, createClass)
router.get("/", readClasses)
router.get("/:id", readClass)
router.put("/:id", authenticateUser, classSchema, validateSchema, updateClass)
router.delete("/:id", authenticateUser, deleteClass)

export default router
