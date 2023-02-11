import { User } from '@prisma/client'
import { prisma } from '../prisma/client'

type newTransactionType = {
    payload: { userId: string },
    title: string,
    category: string,
    value: number,
    cashIn: boolean,
}


export async function createTransactionService({ payload, title, category, value, cashIn }: newTransactionType) {
    
    const newTransaction = await prisma.transaction.create({
        data: {
            userId: payload.userId,
            title,
            category,
            value,
            cashIn,
        }
    })


    return newTransaction
}