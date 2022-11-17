import { Control } from "react-hook-form"
import { FormInput } from "../Account/type"

export type AddressProps = {
    control: Control<FormInput, any>,
    validation: {
        required: boolean,
        pattern: RegExp
    }
}