import { Router } from "express"

import { validateCourse } from "../middlewares/validations"

import {
  createCourse,
  readCourses,
  readCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/courses"

const router = Router()

router.post("/", validateCourse, createCourse)
router.get("/", readCourses)
router.get("/:id", readCourse)
router.put("/:id", validateCourse, updateCourse)
router.delete("/:id", deleteCourse)

export default router
