import { ReactElement } from "react";
import { NetworkButtonProps } from "./type";

function NetworkButton({ network, setChain, activate, connector }: NetworkButtonProps): ReactElement {
    return (
        <input
            type={'button'}
            key={network.network.params.map((param: { chainId: string }) => param.chainId)}
            value={network.network.params.map((param: { nativeCurrency: { name: string } }) => param.nativeCurrency.name)}
            className={network.style}
            onClick={() => {
                window.ethereum.request(network.network);
                setChain(network.chainId);
                activate(connector);
            }}
        />
    )
}

export default NetworkButton;