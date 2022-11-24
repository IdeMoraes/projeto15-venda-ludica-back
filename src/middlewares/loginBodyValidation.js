import { usersCollection } from "../db.js";
import bcrypt from "bcrypt";

export async function loginBodyValidation(req, res, next){
    const { email, password } = req.body;

    const userExists = await usersCollection.findOne({email});

    if(!userExists){
        return res.sendStatus(401);
    }

    const samePassword = bcrypt.compareSync(password, userExists.password);
    
    if(!samePassword){
        return res.sendStatus(401);
    }
    req.userExists = userExists;

    next();
}