
import joi from "joi";

export const productsSchema = joi.object({
    name: joi.string().required(),
    image: joi.string().required(),
    price: joi.string().required(),
    department: joi.string().required(),
    stock: joi.number().required(),
})