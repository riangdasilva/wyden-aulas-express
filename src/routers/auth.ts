import { Router } from "express"

import { userSchema, validateSchema } from "../middlewares/validations"

import { register, login, logout } from "../controllers/auth"

const router = Router()

router.post("/register", userSchema, validateSchema, register)
router.post("/login", userSchema, validateSchema, login)
router.post("/logout", logout)

export default router
