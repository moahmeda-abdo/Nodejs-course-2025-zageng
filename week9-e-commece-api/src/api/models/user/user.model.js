import mongoose from 'mongoose'



const userSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    phone: { type: String },
    role:{type: String , default:"user", enum: ["user", "admin", "editor"]},
    is_deleted: { type: Boolean, default: false },
})



export const User = mongoose.model("user", userSchema)
