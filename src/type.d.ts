import { Request, Response, NextFunction } from "express"
import { Model } from "sequelize"

export interface Request extends Request {
  user?: any
}

export interface Response extends Response {}

export interface NextFunction extends NextFunction {}
