import { Request, Response } from 'express'
import { createUserService } from '../services/createUserService'

export async function createUserController(req: Request, res: Response){
    try {
        const response = await createUserService(req.body)
        return res.status(201).json(response)
    } catch (err: any) {
        return res.status(401).json({message: err.message});
    }

}