import mongoose from 'mongoose'



const categorySchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
})



export const Category = mongoose.model("category", categorySchema)
