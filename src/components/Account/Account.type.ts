import { Web3Provider } from "@ethersproject/providers"
import { Token } from "../../types/types"

export type AccountProps = {
    token?: Token | undefined,
    setToken: any,
    account: string | Promise<string> | undefined,
    chain: string,
    library: Web3Provider | undefined
}

export type FormInput = {
    token: string,
    adderss: string,
    amount: string
}