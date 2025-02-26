import { getDataFromFile } from "../../utils/getData.js"


export const getAllStudentsController = async (req, res) => {
    const data = await getDataFromFile()
    res.send("hahaha")
    res.status(200).send(data)
}

export const getStudentController = async (req, res) => {
    const id = req.params.id
    const data = await getDataFromFile()
    const std = data.find(student => student.id === +id)
    if (!std) return res.status(404).send("NO students found")
    res.status(200).send(std)
}