import { Router } from "express"
import { authenticateUser } from "../middlewares/auth"
import { courseSchema, validateSchema } from "../middlewares/validations"

import {
  createCourse,
  readCourses,
  readCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/courses"

const router = Router()

router.post("/", authenticateUser, courseSchema, validateSchema, createCourse)
router.get("/", readCourses)
router.get("/:id", readCourse)
router.put("/:id", authenticateUser, courseSchema, validateSchema, updateCourse)
router.delete("/:id", authenticateUser, deleteCourse)

export default router
