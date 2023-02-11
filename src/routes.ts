import { userValidate } from './midlewares/userValidate';
import { Router } from "express";
import { createTransactionController } from "./controllers/createTransactionController";
import { createUserController } from "./controllers/createUserController";
import { loginController } from "./controllers/loginController";
import { verifyToken } from "./midlewares/jwt";
import { transactionValidate } from "./midlewares/transactionValidate";

const router = Router()

router.post('/register', userValidate, (request, response) => {
  return createUserController(request, response);
});

router.post('/login', userValidate, (request, response) => {
  return loginController(request, response);
})

router.post('/transactions', verifyToken, transactionValidate, (request, response) => {
  return createTransactionController(request, response);
})

export { router }