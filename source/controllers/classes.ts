import { Request, Response } from "express"
import { Class } from "../models/classes"

export function createClass(req: Request, res: Response) {
  Class.create(req.body)
    .then((courseClass) => {
      return res.status(201).json(courseClass)
    })
    .catch((err) => {
      return res.status(500).json(err)
    })
}

export function readClasses(req: Request, res: Response) {
  Class.findAll().then((courseClasses) => {
    return res.status(200).json(courseClasses)
  })
    .catch((err) => {
      return res.status(500).json(err)
    }
    )
}

export function readClass(req: Request, res: Response) {
  Class.findByPk(req.params.id)
    .then((courseClass) => {
      if (!courseClass) {
        return res.status(404).json({ message: "Class not found" })
      }

      return res.status(200).json(courseClass)
    })
    .catch((err) => {
      return res.status(500).json(err)
    })
}

export function updateClass(req: Request, res: Response) {
  Class.update(req.body, {
    where: { id: req.params.id },
  })
    .then((courseClass) => {
      return res.json(courseClass)
    })
    .catch((err) => {
      return res.status(500).json(err)
    })
}

export function deleteClass(req: Request, res: Response) {
  Class.destroy({
    where: { id: req.params.id },
  })
    .then((courseClass) => {
      return res.json(courseClass)
    })
    .catch((err) => {
      return res.status(500).json(err)
    })
}
