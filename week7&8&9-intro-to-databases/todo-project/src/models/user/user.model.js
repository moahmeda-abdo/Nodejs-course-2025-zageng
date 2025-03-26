import mongoose from 'mongoose'



const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    phone: { type: String },
})



export const User = mongoose.model("user", userSchema)
