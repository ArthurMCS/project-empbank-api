import { Request, Response } from 'express'
import { loginService } from '../services/loginService';

export async function loginController(req: Request, res: Response){
    try {
        const response = await loginService(req.body)
        return res.status(201).json(response)
    } catch (err: any) {
        return res.status(401).json({message: err.message});
    }
}