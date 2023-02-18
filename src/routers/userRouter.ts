import express from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { UserController } from '../controller/UserController'
import { UserDatabase } from '../database/UserDatabase'

//organiza rotas e centraliza os endpoints

export const userRouter = express.Router()
const userController = new UserController(
    new UserBusiness(
        new UserDatabase
    )
)

userRouter.post("/signup", userController.createUser)