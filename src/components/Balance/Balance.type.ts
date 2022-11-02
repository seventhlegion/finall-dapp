import { Web3Provider } from "@ethersproject/providers"
import { Token } from "../../types/types"

export type BalanceProps = {
    library: Web3Provider | undefined | null,
    account: string | Promise<string>,
    token: Token | undefined,
    chainId: string | undefined
}