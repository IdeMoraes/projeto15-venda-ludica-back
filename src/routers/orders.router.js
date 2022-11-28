import { Router } from "express";
import { postOrder } from "../controllers/orders.controller.js";
import { authValidation } from "../middlewares/authValidation.js";

const router = Router();

router.post("/orders", authValidation, postOrder);


export default router;