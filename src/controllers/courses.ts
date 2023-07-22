import { Request, Response } from "../type"
import { Course } from "../models/courses"
import courseService from "../services/courses"

export async function createCourse(req: Request, res: Response) {
  try {
    const result = await courseService.createCourse(req.body)
    return res.status(result.status).json(result.data)
  } catch (err) {
    return res.status(500).json(err)
  }
}

export async function readCourses(req: Request, res: Response) {
  try {
    const courses = await Course.findAll()
    return res.status(200).json(courses)
  } catch (err) {
    return res.status(500).json(err)
  }
}

export async function readCourse(req: Request, res: Response) {
  try {
    const course = await Course.findByPk(req.params.id)
    if (!course) {
      return res.status(404).json({ message: "Course not found" })
    }
    return res.status(200).json(course)
  } catch (err) {
    return res.status(500).json(err)
  }
}

export async function updateCourse(req: Request, res: Response) {
  try {
    const result = await courseService.updateCourse(req.params.id, req.body)
    return res.status(result.status).json(result.data)
  } catch (err) {
    return res.status(500).json(err)
  }
}

export async function deleteCourse(req: Request, res: Response) {
  try {
    const rowsAffected = await Course.destroy({ where: { id: req.params.id } })
    if (!rowsAffected) {
      return res.status(404).json({ message: "Course not found" })
    }
    return res.status(204).json()
  } catch (err) {
    return res.status(500).json(err)
  }
}
