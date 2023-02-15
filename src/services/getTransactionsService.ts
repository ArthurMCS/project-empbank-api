import { prisma } from '../prisma/client'

type Transaction = {
    userId: string,
    title: string,
    value: number,
    category: string,
    created_at: Date,
}

export async function getTransactionsService(userId: string, skip: number, take: number, search: string) {
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

        let transactionsFiltered: Transaction[] = []

        if(search.length > 0){
            const lowerSearch = search.toLowerCase()

            const allTransactions = await prisma.transaction.findMany({
                where: { userId },
            })

            transactionsFiltered = allTransactions.filter(transaction => (
                transaction.title.toLowerCase().includes(lowerSearch) 
                || transaction.category.toLowerCase().includes(lowerSearch)
            ))
        }

        const totalPage = Math.ceil(total / take)

        return {total, totalPage, transactions, transactionsFiltered}
   } catch (err) {
     return err
   }
}