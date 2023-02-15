import { prisma } from "../prisma/client";
import md5 from "md5";
import { sign } from "jsonwebtoken";

type LoginData = {
    email: string;
    password: string;
}

export async function loginService({ email, password }: LoginData){
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if(!user){
        throw new Error("Authentication failed, please check the entered data");
    }

    if(md5(password) !== user.password){
        throw new Error("Authentication failed, please check the entered data");
    }

    const token = sign({userId: user.id, email: user.email}, process.env.JWT_SECRET as string, {
        expiresIn: '5h',
    })

    return { message: "successfully authenticated", token }
}