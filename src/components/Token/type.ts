import { Control } from "react-hook-form"

export type TokenProps = {
    chain: string,
    setToken: Function,
    control: Control | any,
    error?: boolean
}