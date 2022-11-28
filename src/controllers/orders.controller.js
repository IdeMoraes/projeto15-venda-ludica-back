
import {cartCollection, ordersCollection} from "../db.js";

export async function postOrder(req, res){
    const newOrder = req.body;
    console.log(newOrder);
    const user = req.user;


    try {
        const cart = await cartCollection.findOne({userId: user._id.toString()});
        if(!cart){
            return res.send("Adicione ao carrinho antes de tentar finalizar o pedido.");
        }
        await ordersCollection.insertOne({
            userId: user._id.toString(), 
            products: cart.products, 
            adress: newOrder.adress, 
            recipient: newOrder.recipient,
            payment: newOrder.payment
        });
        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}