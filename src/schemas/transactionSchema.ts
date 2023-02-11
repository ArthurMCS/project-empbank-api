import * as yup from "yup";

export const createTransactionSchema = yup.object({
    title: yup.string().required(),
    category: yup.string().required(),
    value: yup.number().required(),
    cashIn: yup.boolean()
})