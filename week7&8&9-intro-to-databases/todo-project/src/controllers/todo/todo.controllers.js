import { InternalServerError, NotFoundError } from "../../errors/Errors.js";
import { Todo } from "../../models/todo/todo.model.js";

export const CreateTodoController = async (req, res) => {
  try {
    const data = req.body;
    const user = req.user;

    const newTodo = await Todo({ ...data, user: user._id });
    await newTodo.save();

    if (newTodo) {
      res.status(201).json({
        data: newTodo,
        message: "Todo created successfully",
      });
    } else {
      throw new InternalServerError();
    }
  } catch (error) {
    res.status(error.statusCode).json({
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
      throw new NotFoundError("todo not found");
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
      throw new NotFoundError("todo not found");
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
      throw new NotFoundError("todo not found");
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
    const query = buildQuery(req);
    const user = req.user;
    const todos = await Todo.find({ ...query, user: user._id });

    if (todos.length === 0) {
    } else {
      
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

function buildQuery(req) {
  const { startDate, endDate, title, isCompleted } = req.query;

  const query = {
    ...(title && { title: { $regex: title, $options: "i" } }),
    ...(isCompleted && { is_completed: isCompleted }),
  };

  if (startDate || endDate) {
    query.createdAt = {
      ...(startDate && { $gte: new Date(startDate) }),
      ...(endDate && { $lte: new Date(endDate) }),
    };
  }

  return query;
}
//24-2-2402
