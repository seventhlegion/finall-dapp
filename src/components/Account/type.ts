import { Web3Provider } from "@ethersproject/providers"
import { Token } from "../../types/types"

export type AccountProps = {
    token?: Token,
    setToken: Function,
    account?: string | Promise<string>,
    chain: string,
    library?: Web3Provider,
    pattern: RegExp,
    isTransactionComplete?: string,
    setIsTransactionComplete: Function
}

export type FormInput = {
    token: string,
    address: string,
    amount: string
}