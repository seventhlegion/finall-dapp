export type Token = {
    value: string | undefined,
    label: string | undefined,
    isCoin: boolean | undefined
}

export type Networks = {
    network: {
        method: string;
        params: {
            chainId: string;
            chainName: string;
            nativeCurrency: {
                name: string;
                symbol: string;
                decimals: number;
            };
            rpcUrls: string[];
            blockExplorerUrls: string[];
        }[];
    };
    chainId: string;
    style: string;
}[]

export type NetworkContracts = {
    networkChainId: string;
    networkTokenContracts: ({
        label: string;
        isCoin: boolean;
    }
        |
    {
        value: string;
        label: string;
        isCoin: boolean;
    })[];
}[] 