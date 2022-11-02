import { Control, FieldErrors } from "react-hook-form"

export type TokenProps = {
    chain: string,
    setToken: Function,
    errors: FieldErrors,
    control: Control | any
}