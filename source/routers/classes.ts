import { Router } from "express"

import { validateClass } from "../middlewares/validations"

import {
  createClass,
  readClasses,
  readClass,
  updateClass,
  deleteClass,
} from "../controllers/classes"

const router = Router()

router.post("/", validateClass, createClass)
router.get("/", readClasses)
router.get("/:id", readClass)
router.put("/:id", validateClass, updateClass)
router.delete("/:id", deleteClass)

export default router
