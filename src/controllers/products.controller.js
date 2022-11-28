import { ObjectId } from "mongodb";
import { usersCollection, productsCollection, cartCollection} from "../db.js";

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

export async function getProduct(req,res){
    const productId = req.params.productId;
    try{
        const product = await productsCollection.findOne({_id: ObjectId(productId)});
        console.log(product)
        res.send(product);
    }catch(err){
        res.sendStatus(500);
    }
}
export async function getCart(req,res){
    const user = req.user;
    try{
        const cart = await cartCollection.findOne({userId: user._id});
        res.send(cart);
    }catch(err){
        res.sendStatus(500);
    }
}