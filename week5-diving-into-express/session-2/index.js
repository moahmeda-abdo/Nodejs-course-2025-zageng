import express from 'express'
import { getDataFromFile, getFakeData } from './src/utils/getData.js'


const app = express()

const PORT = 3000

app.use(express.json())//middleware

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})


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
    const { limit = 10, skip = 0, search } = req.query
    const data = getFakeData()
    // if (sortBy) data.sort((a, b) => a[sortBy] - b[sortBy])
    // const sortedData = data.slice(+skip , +skip + +limit)
    const filteredData = data.filter(prod => prod.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    res.status(200).send(filteredData)
})


app.post("/auth/login", async (req, res) => {
    const { email, password } = req.body

    const data = await getDataFromFile()
    const user = data.find(user => user.email === email )
    if (!user) return res.status(404).send("User not found")
    if (user.password !== password) return res.status(401).send("Wrong password")
    res.status(200).send(user)
})