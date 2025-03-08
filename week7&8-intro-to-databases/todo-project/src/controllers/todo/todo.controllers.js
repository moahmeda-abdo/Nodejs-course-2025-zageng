import { Todo } from "../../models/todo/todo.model.js";

export const CreateTodoController = async (req, res) => {
  try {
    const data = req.body;

    const newTodo = await Todo(data);
    await newTodo.save();

    if (newTodo) {
      res.status(201).json({
        data: newTodo,
        message: "Todo created successfully",
      });
    } else {
      throw new Error("Cannot create todo");
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const UpdateTodoController = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const todo = await Todo.findByIdAndUpdate(id, data, { new: true });

    if (!todo) {
      const error = new Error("Todo not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      data: todo,
      message: "Todo updated successfully",
    });
  } catch (error) {
    res.status(error.statusCode).json({
      message: error.message,
    });
  }
};

export const DeleteTodoController = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      const error = new Error("Todo not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(204);
  } catch (error) {
    res.status(error.statusCode).json({
      message: error.message,
    });
  }
};

export const GetOneTodoController = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findById(id);

    if (!todo) {
      const error = new Error("Todo not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      data: todo,
      message: "Todo found successfully",
    });
  } catch (error) {
    res.status(error.statusCode).json({
      message: error.message,
    });
  }
};

export const GetAllTodoController = async (req, res) => {
  try {
    const todos = await Todo.find();

    if (todos.length === 0) {
      const error = new Error("Todos not found");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      data: todos,
      message: "Todos found successfully",
    });
  } catch (error) {
    res.status(error.statusCode).json({
      message: error.message,
    });
  }
};
