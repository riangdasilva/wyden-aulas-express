import { Request, Response, NextFunction } from "express"
import { body } from "express-validator"

export function validateCourse(
  req: Request,
  res: Response,
  next: NextFunction
) {
  body("name").isString().notEmpty()
  body("hours").isInt()
  next()
}

export function validateClassroom(
  req: Request,
  res: Response,
  next: NextFunction
) {
  body("building").isInt()
  body("floor").isInt()
  body("room").isInt()
  next()
}

export function validateClass(req: Request, res: Response, next: NextFunction) {
  body("course").isInt()
  body("teacher").isString().notEmpty()
  body("classroom").isInt()
  next()
}
