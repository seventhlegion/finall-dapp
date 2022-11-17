import { InjectedConnector } from "@web3-react/injected-connector"

export type NetworkButtonProps = {
    network: any,
    setChain: Function,
    activate: Function,
    connector: InjectedConnector,
    setPattern: Function
}