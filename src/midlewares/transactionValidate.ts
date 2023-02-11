import { Request, Response, NextFunction } from 'express';
import { createTransactionSchema } from '../schemas/transactionSchema';


export const transactionValidate = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body)
    try {     
        await createTransactionSchema.validate(req.body)
        next()
    } catch (error: any) {
        return res.status(401).json({message: error.message})
    }
};