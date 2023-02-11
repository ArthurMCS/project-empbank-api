import * as yup from "yup";

export const userSchema = yup.object({
    email: yup.string().email("Please enter a correct email").required(),
    password: yup.string().min(8, "Must be at least 8 characters in length")
    .matches(new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"),
    "Must have one special character")
})