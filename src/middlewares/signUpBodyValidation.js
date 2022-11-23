import { usersSchema } from "../models/users.model.js";
import { usersCollection } from "../db.js";

export async function signUpBodyValidation(req, res, next){
    const user = req.body;
    const {error} = usersSchema.validate(user, {abortEarly: false});

    if(error){
        const errors = error.details.map((detail)=> detail.message)
        return res.status(400).send(errors);

    }

    const userExists = await usersCollection.findOne({
        email: user.email
    });

    if(userExists){
        return res.status(409).send({message: "Esse e-mail já é cadastrado"});
    }

    if(user.password !== user.check){
        return res.status(409).send({message: "Senhas diferentes"});
    }

    next();
}