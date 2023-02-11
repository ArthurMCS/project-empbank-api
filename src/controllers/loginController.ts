import { Request, Response } from 'express'
import { loginService } from '../services/loginService';

export async function loginController(req: Request, res: Response){
    try {
        const response = await loginService(req.body)
        return res.status(201).json(response)
    } catch (error: any) {
        if(error.message !== "Authentication failed, please check the entered data"){
            return res.status(500).json({ message: error.message })
        }
        return res.status(401).json({ message: error.message });
    }
}