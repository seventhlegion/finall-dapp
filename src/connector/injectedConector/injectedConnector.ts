import { InjectedConnector } from "@web3-react/injected-connector";

export const metaMaskConnector = () => {

    const MetaMask = new InjectedConnector({ supportedChainIds: [1, 97, 137, 10, 43114, 42161, 128] });

    return MetaMask;
}