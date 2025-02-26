export const addDateToReq = (req ,res , next)=>{
    console.log("Date middleware called")
    req.date = new Date().toISOString() 
    req.mohamed = "mohamed"
    next()
}

