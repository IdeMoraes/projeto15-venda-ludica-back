
import {ordersCollection} from "../db.js";

export async function postOrder(req, res){
    const newOrder = req.body;
    const user = req.user;
/*     {
        userID:
        products: [{productId: ###, quantity: ###} , {productId: ###, quantity: ###}],
        adress: {country: ##, state: ##, city: ##, area: ##, street: ##, zipCode: ##, houseNumber: ##, complement: ##},
        recipient: {name: ##, phoneNumber: ##},
        paymentMethod: ##
        } */
    try {
        const cart = await ordersCollection.findOne({userId: user._id.toString()});
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