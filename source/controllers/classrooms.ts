import { Request, Response } from "express"
import { Classroom } from "../models/classrooms"

export function createClassroom(req: Request, res: Response) {
  Classroom.create(req.body)
    .then((classroom) => {
      return res.status(201).json(classroom)
    })
    .catch((err) => {
      return res.status(500).json(err)
    })
}

export function readClassrooms(req: Request, res: Response) {
  Classroom.findAll()
    .then((classrooms) => {
      return res.status(200).json(classrooms)
    })
    .catch((err) => {
      return res.status(500).json(err)
    })
}

export function readClassroom(req: Request, res: Response) {
  Classroom.findByPk(req.params.id)
    .then((classroom) => {
      if (!classroom) {
        return res.status(404).json({ message: "Classroom not found" })
      }

      return res.status(200).json(classroom)
    })
    .catch((err) => {
      return res.status(500).json(err)
    })
}

export function updateClassroom(req: Request, res: Response) {
  Classroom.update(req.body, {
    where: { id: req.params.id },
  })
    .then((classroom) => {
      return res.json(classroom)
    })
    .catch((err) => {
      return res.status(500).json(err)
    })
}

export function deleteClassroom(req: Request, res: Response) {
  Classroom.destroy({
    where: { id: req.params.id },
  })
    .then((classroom) => {
      return res.json(classroom)
    })
    .catch((err) => {
      return res.status(500).json(err)
    })
}
