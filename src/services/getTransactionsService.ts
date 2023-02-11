import { prisma } from '../prisma/client'

export async function getTransactionsService(userId: string, skip: number, take: number) {
   try{
        const [transactions, total] = await prisma.$transaction([
            prisma.transaction.findMany({
                where: { userId },
                skip,
                take
            }),
            prisma.transaction.count({
                where: { userId },
            })
        ])

        const totalPage = Math.ceil(total / take)

        return {total, totalPage, transactions}
   } catch (err) {
     return err
   }
}