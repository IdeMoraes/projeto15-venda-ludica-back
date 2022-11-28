import { Router } from "express";
import {createProduct, getProducts, getProduct} from "../controllers/products.controller.js";
//import { authValidation } from "../middlewares/authValidation.js";
//import { createProductValidation } from "../middlewares/createProductValidation.js";

const router = Router();

router.post("/products", createProduct);
router.get("/products", getProducts);
router.get("/products/:productId", getProduct);

export default router;