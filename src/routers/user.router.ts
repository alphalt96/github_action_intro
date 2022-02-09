import { Router } from 'express';
import { registerUser } from '../controllers/auth';

export const userRouter = Router()

userRouter.post('/register', registerUser)
