import Jwt from "jsonwebtoken"


export const generateToken = (name , email , phone)=>{
    const secret = process.env.JWT_SECRET
    const expiresIn = '30d'
    const token = Jwt.sign({name , email , phone}, secret ,{expiresIn})
    return token
}