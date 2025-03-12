import bcrypt from "bcrypt"

const salt = 10
export const hashPassword = async (password)=>{
    const hashedPassword = await bcrypt.hash(password , salt)
    console.log("password : " , password)
    console.log("hashedPassword : " , hashedPassword)
    return hashedPassword
}

async function ComparePassword(password , hashingPassword){
    const match = await bcrypt.compare(password , hashingPassword)
    return match
}

export default hashPassword