import { Router } from "express";
import { CreateTodoController } from "../../controllers/todo/todo.controllers.js";

const router = Router();


router.post("/todo", CreateTodoController);



export { router as todoRouter }