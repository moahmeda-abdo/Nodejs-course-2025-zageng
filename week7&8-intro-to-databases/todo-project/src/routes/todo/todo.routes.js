import { Router } from "express";
import {
  CreateTodoController,
  DeleteTodoController,
  GetAllTodoController,
  GetOneTodoController,
  UpdateTodoController,
} from "../../controllers/todo/todo.controllers.js";

const router = Router();

router.post("/", CreateTodoController);
router.put("/:id", UpdateTodoController);
router.delete("/:id", DeleteTodoController);
router.get("/:id", GetOneTodoController);
router.get("/", GetAllTodoController);

export { router as todoRouter };
