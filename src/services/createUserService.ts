import { User } from '@prisma/client'
import { prisma } from '../prisma/client'

const md5 = require('md5');

type CreateUserData = {
    email: string;
    password: string;
}

export async function createUserService({email, password}: CreateUserData):Promise<User | Error> {

    const userExists = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if(userExists){
        throw new Error("User already exits");
    }

    const hashedPassword = md5(password);

    const user = await prisma.user.create({
        data: { email, password: hashedPassword}
    })

    return user
}