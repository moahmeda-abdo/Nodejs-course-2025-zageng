import mongoose from "mongoose";


const todoSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    is_completed: { type: Boolean ,default:false},
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    // status:{type:string , default:"pending" , enum: ["pending" , "completed"]}
})

export const Todo = mongoose.model("todo", todoSchema)