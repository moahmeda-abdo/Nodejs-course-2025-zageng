import Joi from "joi";


export const createProductSchema = Joi.object({
    name: Joi.string().required().strict().max(120),
    price: Joi.number().required().strict().min(0),
    category: Joi.string().required().strict(),
    description: Joi.string().required().strict(),
    brand: Joi.string().required().strict(),
})