import { Router } from "express";
import { SignUpController } from "../../controllers/auth/auth.controller.js";



const router = Router()


router.post('/signup', SignUpController)
// router.post('/login', LoginController)


export { router as authRouter }