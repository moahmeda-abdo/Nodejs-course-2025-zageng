import express from 'express'
import { getDataFromFile, getFakeData } from './utils/getData.js'
import morgan from 'morgan'
import { logger } from './middlewares/logger.js'
import { addDateToReq } from './middlewares/addDateToReq.js'

//types of middleware
// 1. built-in middleware //express.json()
// 2. Third-party middleware // npm i mid
// 3. Custom middleware // user defined

const app = express()

const PORT = 3000




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

app.use(express.json())
app.use(morgan("dev"))
app.use(addDateToReq)//2
app.use(logger)




app.get("/students", async (req, res) => {
    const data = await getDataFromFile()
    res.status(200).send(data)
})




app.get("/students/:id", async (req, res) => {
    const id = req.params.id
    const data = await getDataFromFile()
    const std = data.find(student => student.id === +id)
    if (!std) return res.status(404).send("NO students found")
        res.status(200).send(std)
})

app.get("/products", (req, res) => {
    // const { limit = 10, skip = 0, search, sortBy } = req.query
    const data = getFakeData()
    // if (sortBy) data.sort((a, b) => a[sortBy] - b[sortBy])
    // const sortedData = data.slice(+skip , +skip + +limit)
    // const filteredData = data.filter(prod => prod.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    res.status(200).send(data)
})


app.post("/auth/login", async (req, res) => {
    const { userEmail: email, password } = req.body
    console.log("date :" , req.date)
    console.log("mohamed :" , req.mohamed)
    const data = await getDataFromFile()
    const user = data.find(user => user.email === email)
    if (!user) return res.status(404).send("User not found")
    if (user.password !== password) return res.status(401).send("Wrong password")
    res.status(200).send(user)
})

