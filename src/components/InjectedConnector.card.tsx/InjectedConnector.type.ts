import { Web3Provider } from "@ethersproject/providers"

export type InjectedConnectorProps = {
    account: string | Promise<string>,
    active: boolean | undefined | null,
    library: Web3Provider | undefined,
    chainId: string | undefined,
    deactivate: VoidFunction,
    chain: string
}