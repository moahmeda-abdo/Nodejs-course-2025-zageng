import { Router } from "express";
import { LoginRouter } from "./login.routes.js";
import { signupRouter } from "./signup.routes.js";



const router = Router()

router.use(LoginRouter)
router.use(signupRouter)


export { router as authRouter }
