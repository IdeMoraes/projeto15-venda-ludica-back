import joi from "joi";

export const productsSchema = joi.object({
    name: joi.string().required(),
    image: joi.string().required(),
    price: joi.string().required(),
    department: joi.string().required(),
    description: joi.string().required(),
    author: joi.string().required(),
    language: joi.string().required(),
    published: joi.string().required(),
    format: joi.string().required(),
    stock: joi.number().required(),
})