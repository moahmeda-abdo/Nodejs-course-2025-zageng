import { Router } from "express";
import { SignInController, SignUpController } from "../../controllers/auth/auth.controller.js";



const router = Router()


router.post('/signup', SignUpController)
router.post('/signin', SignInController)


export { router as authRouter }