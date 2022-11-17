import { Control } from "react-hook-form"
import { FormInput } from "../Account/type"

export type TokenProps = {
    chain: string,
    setToken: Function,
    control: Control<FormInput, any>,
    error?: boolean
}