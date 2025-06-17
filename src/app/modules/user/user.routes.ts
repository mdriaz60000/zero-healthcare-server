import  express  from 'express';
import { userController } from "./user.controller";


const router =  express.Router()

router.post("/user", userController.createAdmin)

export const userRouter = router