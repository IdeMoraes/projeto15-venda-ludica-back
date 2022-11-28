import joi from "joi";

export const usersSchema = joi.object({
  name: joi.string().required().min(1).max(100),
  email: joi.string().email().required(),
  password: joi.string().required().min(1),
  check: joi.string().required().min(1),
});