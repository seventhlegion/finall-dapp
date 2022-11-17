import { Web3Provider } from "@ethersproject/providers"
import { Token } from "../../types/types"

export type BalanceProps = {
    library?: Web3Provider,
    account?: string | Promise<string>,
    token?: Token,
    chainId?: number | string
    isTransactionComplete?: string
}