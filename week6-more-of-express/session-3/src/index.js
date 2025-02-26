import express from 'express'
import morgan from 'morgan'
import { logger } from './middlewares/logger.js'
import { addDateToReq } from './middlewares/addDateToReq.middleware.js'
import { StudentsRouter } from './routes/students/get_student.routes.js'
import { ProductsRouters } from './routes/products/index.js'
import mongoose from 'mongoose'
import 'dotenv/config'
import { Todo } from './models/todo/todo.model.js'



const app = express()

const PORT = 3000




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

app.use(express.json())
app.use(morgan("dev"))
app.use(addDateToReq)//2


app.use(StudentsRouter)
app.use(ProductsRouters)


const connectDb = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
    }
}

app.post("/todo", async (req, res) => {
    const data = req.body
    const newTodo = new Todo(data)
    await newTodo.save()
    res.status(201).send({ data: newTodo, message: "Todo created successfully" })

})


connectDb()