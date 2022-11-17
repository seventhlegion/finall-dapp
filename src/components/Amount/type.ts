import { Control } from "react-hook-form"
import { FormInput } from "../Account/type"

export type AmountProps = {
    control: Control<FormInput, any>,
    validation?: {
        required: boolean
    }
}