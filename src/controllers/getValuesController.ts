import { Request, Response } from 'express'
import { getValuesService } from '../services/getValuesService'

export async function getValuesController(req: Request, res: Response){
    try {     
        const response = await getValuesService(req.body.payload.userId)
        return res.status(200).json(response)
    } catch (error: any) {
        return res.status(500).json({ error: error.message })
    }
}