import { Request, Response, NextFunction } from "../type"
import { body, validationResult } from "express-validator"

export const userSchema = [
  body("username").isString().notEmpty(),
  body("password").isString().notEmpty(),
]

export const courseSchema = [
  body("name").isString().notEmpty(),
  body("hours").isInt(),
]

export const classroomSchema = [
  body("building").isInt(),
  body("floor").isInt(),
  body("room").isInt(),
]

export const classSchema = [
  body("course").isInt(),
  body("teacher").isString().notEmpty(),
  body("classroom").isInt(),
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
