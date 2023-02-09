import { Router } from "express";
import { createUserController } from "./controllers/createUserController";

const router = Router()

router.post('/register', (request, response) => {
  return createUserController(request, response);
});

export { router }