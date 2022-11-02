import { MetaMask } from "@web3-react/metamask"

export type NetworkSelectProps = {
    setChain: any,
    connector: MetaMask,
    activate: Function
}