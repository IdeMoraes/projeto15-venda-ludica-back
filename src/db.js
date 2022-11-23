import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config()
const mongoClient = new MongoClient(process.env.MONGO_URI);
await mongoClient.connect().catch((error)=>{console.log(error)});
const db = mongoClient.db(process.env.BANCO);

export default db;