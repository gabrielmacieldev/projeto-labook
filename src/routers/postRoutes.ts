import express from 'express'
import { PostBusiness } from '../business/PostBusiness'
import { PostController } from '../controller/PostController'
import { PostDatabase } from '../database/PostDatabase'

//organiza rotas e centraliza os endpoints

export const postRouter = express.Router()
const postController = new PostController(
    new PostBusiness(
        new PostDatabase()
    )
)

postRouter.get("/", postController.getPosts)