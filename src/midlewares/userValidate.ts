import { Request, Response, NextFunction } from 'express';
import { userSchema } from '../schemas/userSchemas';


export const userValidate = async (req: Request, res: Response, next: NextFunction) => {
    const {email, password} = req.body;

    try {
        await userSchema.validate({email, password})
        next()
    } catch (error: any) {
        return res.status(401).json({message: error.message})
    }
};