
import {ordersCollection} from "../db.js";

export async function postOrder(req, res){
    const newOrder = req.body;
    const user = req.user;

    try {
        const cart = await ordersCollection.findOne({userId: user._id.toString()});
        if(!cart){
            alert("Adicione ao carrinho antes de tentar finalizar o pedido.");
            return;
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
        res.sendStatus(500);
    }
}