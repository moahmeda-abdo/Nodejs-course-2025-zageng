import { Router } from "express";
import { getAllStudentsController, getStudentController } from "../../controllers/students/students.controller.js";



const router = Router()



router.get("/students/:id", getStudentController)
router.get("/students", getAllStudentsController)



export { router as StudentsRouter }
