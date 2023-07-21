import { Request, Response, NextFunction } from "../type"
import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../configs"

export function authenticateUser(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.header("Authorization")?.split(" ")[1]
  if (!token) return res.status(401).send("Access denied. No token provided.")

  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) return res.status(400).send("Invalid token.")
    req.user = payload
    next()
  })
}
