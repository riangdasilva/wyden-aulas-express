import { Request, Response } from "../type"
import { Classroom } from "../models/classrooms"
import classroomService from "../services/classrooms"

export async function createClassroom(req: Request, res: Response) {
  try {
    const result = await classroomService.createClassroom(req.body)
    return res.status(result.status).json(result.data)
  } catch (err) {
    return res.status(500).json(err)
  }
}

export async function readClassrooms(req: Request, res: Response) {
  try {
    const classrooms = await Classroom.findAll()
    return res.status(200).json(classrooms)
  } catch (err) {
    return res.status(500).json(err)
  }
}

export async function readClassroom(req: Request, res: Response) {
  try {
    const classroom = await Classroom.findByPk(req.params.id)
    if (!classroom) {
      return res.status(404).json({ message: "Classroom not found" })
    }
    return res.status(200).json(classroom)
  } catch (err) {
    return res.status(500).json(err)
  }
}

export async function updateClassroom(req: Request, res: Response) {
  try {
    const result = await classroomService.updateClassroom(
      req.params.id,
      req.body
    )
    return res.status(result.status).json(result.data)
  } catch (err) {
    return res.status(500).json(err)
  }
}

export async function deleteClassroom(req: Request, res: Response) {
  try {
    const rowsAffected = await Classroom.destroy({
      where: { id: req.params.id },
    })
    if (!rowsAffected) {
      return res.status(404).json({ message: "Classroom not found" })
    }
    return res.status(204).json()
  } catch (err) {
    return res.status(500).json(err)
  }
}
