import { Request, Response, NextFunction } from "../type"
import { body, validationResult } from "express-validator"

export const userSchema = [
  body("username")
    .notEmpty()
    .withMessage("Username is required")
    .isString()
    .withMessage("Username must be a string"),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isString()
    .withMessage("Password must be a string"),
]

export const courseSchema = [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isString()
    .withMessage("Name must be a string"),
  body("hours")
    .notEmpty()
    .withMessage("Hours is required")
    .isInt()
    .withMessage("Hours must be a number"),
]

export const classroomSchema = [
  body("building")
    .notEmpty()
    .withMessage("Building is required")
    .isInt()
    .withMessage("Building must be a number"),
  body("floor")
    .notEmpty()
    .withMessage("Floor is required")
    .isInt()
    .withMessage("Floor must be a number"),
  body("room")
    .notEmpty()
    .withMessage("Room is required")
    .isInt()
    .withMessage("Room must be a number"),
]

export const classSchema = [
  body("courseId")
    .notEmpty()
    .withMessage("CourseId is required")
    .isInt()
    .withMessage("CourseId must be a number"),
  body("teacher")
    .notEmpty()
    .withMessage("Teacher is required")
    .isString()
    .withMessage("Teacher must be a string"),
  body("classroomId")
    .notEmpty()
    .withMessage("ClassroomId is required")
    .isInt()
    .withMessage("ClassroomId must be a number"),
  body("datetime")
    .notEmpty()
    .withMessage("Datetime is required")
    .isISO8601()
    .withMessage("Datetime must be a date"),
]

export function validateSchema(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  next()
}
