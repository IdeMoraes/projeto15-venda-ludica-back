import { Router } from "express";
import {createProduct} from "../controllers/products.controller.js";
import { createProductValidation } from "../middlewares/createProductValidation.js";

const router = Router();

router.post("/products", createProductValidation , createProduct);

export default router;