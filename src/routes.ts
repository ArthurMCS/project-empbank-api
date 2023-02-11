import { Router } from "express";
import { createUserController } from "./controllers/createUserController";
import { loginController } from "./controllers/loginController";
import { verifyToken } from "./utils/jwt";

const router = Router()

router.post('/register', (request, response) => {
  return createUserController(request, response);
});

router.post('/login', (request, response) => {
  return loginController(request, response);
})

router.post('/transactions', verifyToken, (request, response) => {
  return  console.log(request.body)
})

export { router }