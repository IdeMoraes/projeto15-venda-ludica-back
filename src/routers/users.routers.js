import { Router } from "express";
import { postSignUp } from "../controllers/users.controller.js";
import { signUpBodyValidation } from "../middlewares/signUpBodyValidation.js"

const router = Router();

router.post("/sign-up", signUpBodyValidation , postSignUp);

export default router;