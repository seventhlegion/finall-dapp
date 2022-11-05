import { InjectedConnector } from "@web3-react/injected-connector"

export type NetworkSelectProps = {
    setChain: any,
    connector: InjectedConnector,
    activate: Function
}