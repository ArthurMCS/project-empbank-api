import { Request, Response } from 'express'
import { createTransactionService } from '../services/createTransactionService'

export async function createTransactionController(req: Request, res: Response){
    const response = await createTransactionService(req.body)
    return res.status(201).json(response)
}