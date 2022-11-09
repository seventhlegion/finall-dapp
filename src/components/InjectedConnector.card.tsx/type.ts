import { Web3Provider } from "@ethersproject/providers"

export type InjectedConnectorProps = {
    account: string | Promise<string>,
    active?: boolean,
    library?: Web3Provider,
    chainId?: number,
    deactivate: VoidFunction,
    chain: string
}