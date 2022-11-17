export type Token = {
    value?: string
    label?: string
    isCoin?: boolean
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
    pattern: RegExp
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