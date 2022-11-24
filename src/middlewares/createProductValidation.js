import { productsSchema } from "../models/products.model.js";

export function createProductValidation(req, res, next){
    const product = req.body;
    const {error} = productsSchema.validate(product, {abortEarly: false});

    if(error){
        const errors = error.details.map((detail)=> detail.message)
        return res.status(400).send(errors);
    }
    next();
}