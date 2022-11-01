import { Web3Provider } from "@ethersproject/providers";

type Token = {
    value: string | undefined,
    label: string | undefined,
    isCoin: boolean | undefined
}

export type BalanceProps = {
    library: Web3Provider,
    account: string,
    token: Token
    chainId: number
}

export type InjectedConnectorProps = {
    account: string,
    active: boolean,
    library: Web3Provider,
    chainId: number,
    deactivate: VoidFunction,
    chain: string
}

export type AccountProps = {
    token?: Token | undefined,
    setToken: any,
    account: string,
    chain: string,
    library: Web3Provider
}

