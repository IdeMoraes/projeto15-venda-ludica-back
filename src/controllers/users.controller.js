import bcrypt from "bcrypt";
import { usersCollection , sessionsCollection} from "../db.js";
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

export async function postLogin(req, res){
    const userExists = req.userExists;
    const token = uuidV4();

    try{
        await sessionsCollection.insertOne({
            token,
            userId: userExists._id,
        });
        res.send({token});
    }catch(err){
        res.sendStatus(500);
    }
    
}