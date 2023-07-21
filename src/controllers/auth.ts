import { Request, Response } from "../type"
import { User } from "../models/users"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../configs"
import { hash, compare } from "bcrypt"

export async function register(req: Request, res: Response) {
  try {
    const user = await User.findOne({ where: { username: req.body.username } })
    if (user) {
      return res.status(409).json({ message: "User already exists" })
    }
    const hashedPassword = await hash(req.body.password, 10)
    const created = await User.create({
      username: req.body.username,
      password: hashedPassword,
    })
    return res.status(201).json(created)
  } catch (err) {
    return res.status(500).json(err)
  }
}

export async function login(req: Request, res: Response) {
  try {
    const user = await User.findOne({ where: { username: req.body.username } })
    if (!user) {
      return res.status(404).json({ message: "Invalid credentials" })
    }
    const valid = await compare(req.body.password, user.password)
    if (!valid) {
      return res.status(404).json({ message: "Invalid credentials" })
    }
    const token = jwt.sign({ id: user.id }, JWT_SECRET)
    return res.status(200).json({ token })
  } catch (err) {
    return res.status(500).json(err)
  }
}

export function logout(req: Request, res: Response) {}
