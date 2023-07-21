import { Request, Response } from "../type"
import { Class } from "../models/classes"

export async function createClass(req: Request, res: Response) {
  try {
    const created = await Class.create(req.body)
    return res.status(201).json(created)
  } catch (err) {
    return res.status(500).json(err)
  }
}

export async function readClasses(req: Request, res: Response) {
  try {
    const courseClasses = await Class.findAll()
    return res.status(200).json(courseClasses)
  } catch (err) {
    return res.status(500).json(err)
  }
}

export async function readClass(req: Request, res: Response) {
  try {
    const courseClass = await Class.findByPk(req.params.id)
    if (!courseClass) {
      return res.status(404).json({ message: "Class not found" })
    }
    return res.status(200).json(courseClass)
  } catch (err) {
    return res.status(500).json(err)
  }
}

export async function updateClass(req: Request, res: Response) {
  try {
    const [rowsAffected] = await Class.update(req.body, {
      where: { id: req.params.id },
    })
    if (!rowsAffected) {
      return res.status(404).json({ message: "Class not found" })
    }
    return res.status(204).json()
  } catch (err) {
    return res.status(500).json(err)
  }
}

export async function deleteClass(req: Request, res: Response) {
  try {
    const rowsAffected = Class.destroy({ where: { id: req.params.id } })
    if (!rowsAffected) {
      return res.status(404).json({ message: "Class not found" })
    }
    return res.status(204).json()
  } catch (err) {
    return res.status(500).json(err)
  }
}
