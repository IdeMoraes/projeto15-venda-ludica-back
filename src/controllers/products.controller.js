import { usersCollection, productsCollection } from "../db.js";

export async function createProduct(req, res){
    const product = req.body;
    try{
        await productsCollection.insertOne(product);
        res.sendStatus(201);
    }catch{
        res.sendStatus(500);
    }
};

export async function getProducts(req,res){
    try{
        const products = await productsCollection.find().toArray();
        res.send(products);
    }catch(err){
        res.sendStatus(500);
    }
}