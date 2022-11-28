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
};

export async function getProduct(req,res){
    const productId = req.params.productId;
    try{
        const product = await productsCollection.findOne({_id: ObjectId(productId)});
        console.log(product)
        res.send(product);
    }catch(err){
        res.sendStatus(500);
    }
};
export async function getCart(req,res){
    const user = req.user;
    try{
        const cart = await cartCollection.findOne({userId: user._id.toString()});
        res.send(cart);
    }catch(err){
        res.sendStatus(500);
    }
};
export async function postCart(req, res){
    const newProductToCart = req.body;
    const user = req.user;
    try {
        const cart = await cartCollection.findOne({userId: user._id.toString()});
        if(!cart){
            console.log("Primeira adição ao carrinho");
            await cartCollection.insertOne({userId: user._id.toString(), products: [newProductToCart]});
            res.sendStatus(201);
        }
        else{
            await cartCollection.updateOne({userId: user._id.toString()}, {$push: {products: newProductToCart}});
            res.sendStatus(201);
        }
    } catch (error) {
        res.sendStatus(500);
    }
}

export async function updateCart(req, res){
    const user = req.user;
    try {
            await cartCollection.updateOne({userId: user._id.toString()}, {$set: {products: req.body}});
            res.sendStatus(200);
        }
    catch (error) {
        res.sendStatus(500);
    }
}