import { Request, Response } from 'express'
import { createTransactionService } from '../services/createTransactionService'

export async function createTransactionController(req: Request, res: Response){
    try {     
        const response = await createTransactionService(req.body)
        return res.status(201).json(response)
    } catch (error: any) {
        return res.status(500).json({ error: error.message })
    }
}