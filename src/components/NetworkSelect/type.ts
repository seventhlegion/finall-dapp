import { InjectedConnector } from "@web3-react/injected-connector"

export type NetworkSelectProps = {
    setChain: Function,
    connector: InjectedConnector,
    activate: Function,
    setPattern: Function
}