import { sessionsCollection, usersCollection } from "../db.js";

export async function authValidation(req,res, next){
    const { Authorization } = req.headers;
    const token = Authorization?.replace("Bearer ", "");

    if(!token){
        return res.sendStatus(401);
    }
    try{
        const session = await sessionsCollection.findOne({token})
        const user = await usersCollection.findOne({_id: session?.userId})

        if(!user){
            return res.sendStatus(401);
        }
        
        req.user = user;

    }catch(err){
        res.sendStatus(500);
    }

    next();

}