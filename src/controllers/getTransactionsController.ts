import { Request, Response } from 'express'
import { getTransactionsService } from '../services/getTransactionsService'

export async function getTransactionsController(req: Request, res: Response){
  const skip = Number(req?.query?.skip) || 0  
  const take = Number(req?.query?.take) || 10
  const search = String(req?.query?.search)
  try {
    const response = await getTransactionsService(
        req.body.payload.userId,
        skip, 
        take,
        search
    )
    return res.status(200).json(response)
  } catch (error: any) {
    return res.status(500).json({ message: error.message})
  }
}