import bcrypt from "bcrypt";
import { usersCollection } from "../db.js";
import { v4 as uuidV4 } from "uuid";

export async function postSignUp(req, res){
    const user = req.body;
    try{
        const hashPassword = bcrypt.hashSync(user.password,10);
        delete user.check;
        await usersCollection.insertOne({...user, password:hashPassword});
        res.sendStatus(201);
    }catch{
        res.sendStatus(500);
    }
}
