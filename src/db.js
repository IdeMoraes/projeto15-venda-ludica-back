import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config()
const mongoClient = new MongoClient(process.env.MONGO_URI);
await mongoClient.connect().catch((error)=>{console.log(error)});
const db = mongoClient.db(process.env.BANCO);

export const usersCollection = db.collection("users");
export const sessionsCollection = db.collection("sessions");
export const productsCollection = db.collection("products");
export const cartCollection = db.collection("cart");