import { Router } from "express";
import {createProduct, getProducts} from "../controllers/products.controller.js";
import { authValidation } from "../middlewares/authValidation.js";
import { createProductValidation } from "../middlewares/createProductValidation.js";

const router = Router();

router.post("/products", createProductValidation , createProduct);
router.get("/products", authValidation , getProducts);

export default router;