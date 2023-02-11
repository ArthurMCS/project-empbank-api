import express from 'express'
import { userValidate } from './midlewares/userValidate';
import { Router } from "express";
import { createTransactionController } from "./controllers/createTransactionController";
import { createUserController } from "./controllers/createUserController";
import { loginController } from "./controllers/loginController";
import { verifyToken } from "./midlewares/jwt";
import { transactionValidate } from "./midlewares/transactionValidate";
import { getTransactionsController } from './controllers/getTransactionsController';

require('dotenv').config()
const cors = require('cors')

const app = express()
const router = Router()

app.use(cors())
app.use(express.json())
app.use(router)


router.get('/', (_req, res) => {
   return res.json('sucess!')
})

router.post('/register', userValidate, (request, response) => {
  return createUserController(request, response);
});

router.post('/login', userValidate, (request, response) => {
  return loginController(request, response);
})

router.post('/transactions', verifyToken, transactionValidate, (request, response) => {
  return createTransactionController(request, response);
})

router.get('/transactions', verifyToken, (request, response) => {
  return getTransactionsController(request, response);
})

app.listen(3333, () => console.log('listening on port 3333'));