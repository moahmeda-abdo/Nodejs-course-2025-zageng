import express from 'express'
import { getDataFromFile, getFakeData } from './src/utils/getData.js'

const app = express()

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})


app.get("/students", async (req, res) => {
    const data = await getDataFromFile()
    res.send(data)
})


app.get("/students/:id", async (req, res) => {
    const id = req.params.id
    const data = await getDataFromFile()
    const std = data.find(student => student.id === +id)
    if (!std) return res.send("NO students found")
    res.send(std)
})

app.get("/products" , (req , res) => {
    const data = getFakeData()
    res.send(data)
})