import { Request, Response } from "express"
import { Course } from "../models/courses"

export function createCourse(req: Request, res: Response) {
  Course.create(req.body)
    .then((course) => {
      return res.status(201).json(course)
    })
    .catch((err) => {
      return res.status(500).json(err)
    })
}

export function readCourses(req: Request, res: Response) {
  return Course.findAll()
    .then((courses) => {
      return res.status(200).json(courses)
    })
    .catch((err) => {
      return res.status(500).json(err)
    })
}

export function readCourse(req: Request, res: Response) {
  Course.findByPk(req.params.id)
    .then((course) => {
      if (!course) {
        return res.status(404).json({ message: "Course not found" })
      }

      return res.status(200).json(course)
    })
    .catch((err) => {
      return res.status(500).json(err)
    })
}

export function updateCourse(req: Request, res: Response) {
  Course.update(req.body, {
    where: { id: req.params.id },
  })
    .then((course) => {
      return res.json(course)
    })
    .catch((err) => {
      return res.status(500).json(err)
    })
}

export function deleteCourse(req: Request, res: Response) {
  Course.destroy({
    where: { id: req.params.id },
  })
    .then((course) => {
      return res.json(course)
    })
    .catch((err) => {
      return res.status(500).json(err)
    })
}
