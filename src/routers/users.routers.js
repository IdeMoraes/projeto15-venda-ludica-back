
import { Router } from "express";
import { postLogin, postSignUp } from "../controllers/users.controller.js";
import { loginBodyValidation } from "../middlewares/loginBodyValidation.js";
import { signUpBodyValidation } from "../middlewares/signUpBodyValidation.js"

const router = Router();

router.post("/sign-up", signUpBodyValidation , postSignUp);
router.post("/login", loginBodyValidation , postLogin);

export default router;