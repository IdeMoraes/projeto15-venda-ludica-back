import express, {json} from 'express';
import chalk from 'chalk';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routers/index.js';
import usersRoutes from "./routers/users.routers.js";
import productsRoutes from "./routers/products.routers.js";
import ordersRouters from "./routers/orders.router.js"

dotenv.config();
const porta = process.env.PORTA || 5000;

const app = express();
app.use(cors());
app.use(json());

app.use(router);
app.use(usersRoutes);
app.use(productsRoutes);
app.use(ordersRouters);

app.listen(porta, ()=>{
    console.log(`Listening on ${chalk.blue(porta)}`);
});