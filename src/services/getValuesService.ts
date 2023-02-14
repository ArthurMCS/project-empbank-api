import { Transaction } from "@prisma/client";
import { prisma } from "../prisma/client";

export async function getValuesService(userId: string):Promise<any> {
    const allTransactions = await prisma.transaction.findMany({
        where: { userId }
    })

    const totalCashIn = Number(
        allTransactions
        .filter((transaction) => transaction.cashIn)
        .reduce((acc, curr) => acc + curr.value, 0)
        .toFixed(2)
    )
      
    
    const totalCashOut = Number(
        allTransactions
        .filter((transaction) => !transaction.cashIn)
        .reduce((acc, curr) => acc + curr.value, 0)
        .toFixed(2)
    )
    
    const totalCash = (totalCashIn - totalCashOut)

    return {totalCashIn, totalCashOut, totalCash}
}