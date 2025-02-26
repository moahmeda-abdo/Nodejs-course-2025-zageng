import { getFakeData } from "../../utils/getData.js"

export const getAllProducts = async (req ,res )=>{
    const data = getFakeData()
    res.send(data)
}

export const getProductController = async (req, res) => {
    const id = req.params.id
    const data = getFakeData()
    const prod = data.find(product => product.id === +id)
    if (!prod) return res.status(404).send("NO products found")
    res.status(200).send(prod)
}