import { Todo } from "../../models/todo/todo.model.js"


export const CreateTodoController = async (req, res) => {
    try {
        const data = req.body

        if (!data.user || data.user === "") {
            throw new Error("User is required")
        }
        const newTodo = await Todo(data)
        await newTodo.save()

        if (newTodo) {
            res.status(201).json({
                data: newTodo,
                message: "Todo created successfully"
            })
        } else {
            throw new Error("Cannot create todo");
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}