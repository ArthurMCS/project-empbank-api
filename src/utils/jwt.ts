import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from 'express';

const INVALID_TOKEN = 'Expired or invalid token';
const TOKEN_NOT_FOUND = 'Token not found';


export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: TOKEN_NOT_FOUND });
    }
    try {
      const data = jwt.verify(authorization, process.env.JWT_SECRET as string);
      req.body.id = data
      next();
    } catch (error) {
        console.log(error);
      return res.status(401).json({ message: INVALID_TOKEN });
    }
};