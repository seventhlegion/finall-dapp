import { Networks } from "../types/types";

export const networks: Networks = [
    {
        network: {
            method: "wallet_addEthereumChain",
            params: [
                {
                    chainId: "0x89",
                    chainName: "Matic Mainnet",
                    nativeCurrency: {
                        name: "MATIC",
                        symbol: "MATIC",
                        decimals: 18
                    },
                    rpcUrls: ["https://rpc-mainnet.matic.network/"],
                    blockExplorerUrls: ["https://polygonscan.com/"]
                }
            ]
        },
        chainId: "137",
        style: "#8b5cf6",
        pattern: /^0x[a-fA-F0-9]{40}$/g
    },
    {
        network: {
            method: "wallet_addEthereumChain",
            params: [
                {
                    chainId: "0x61",
                    chainName: "Binance Smart Chain Testnet",
                    nativeCurrency: {
                        "name": "Binance",
                        "symbol": "BNB",
                        "decimals": 18
                    },
                    rpcUrls: [
                        "https://data-seed-prebsc-1-s1.binance.org:8545/"
                    ],
                    blockExplorerUrls: ["https://bscscan.com"]
                }
            ]
        },
        chainId: "97",
        style: "#f97316",
        pattern: /^0x[a-fA-F0-9]{40}$/g
    },
    {
        network: {
            method: "wallet_addEthereumChain",
            params: [
                {
                    chainId: "0xa",
                    chainName: "Optimism",
                    nativeCurrency: {
                        name: "Optimism",
                        symbol: "ETH",
                        decimals: 18
                    },
                    rpcUrls: ["https://opt-mainnet.g.alchemy.com/v2/demo"],
                    blockExplorerUrls: ["https://optimistic.etherscan.io"]
                }
            ]
        },
        chainId: "10",
        style: "#ef4444",
        pattern: /^0x[a-fA-F0-9]{40}$/g
    },
    {
        network: {
            method: "wallet_addEthereumChain",
            params: [
                {
                    chainId: "0xa86a",
                    chainName: "Avalanche C-Chain",
                    nativeCurrency: {
                        name: "Avalanche",
                        symbol: "AVAX",
                        decimals: 18
                    },
                    rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
                    blockExplorerUrls: ["https://snowtrace.io"]
                }
            ]
        },
        chainId: "43114",
        style: "#fca5a5",
        pattern: /^0x[a-fA-F0-9]{40}$/g
    },
    {
        network: {
            method: "wallet_addEthereumChain",
            params: [
                {
                    chainId: "0xa4b1",
                    chainName: "Arbitrum One",
                    nativeCurrency: {
                        name: "Arbitrum One",
                        symbol: "ETH",
                        decimals: 18
                    },
                    rpcUrls: ["https://arb1.arbitrum.io/rpc"],
                    blockExplorerUrls: ["https://arbiscan.io"]
                }
            ]
        },
        chainId: "42161",
        style: "#06b6d4",
        pattern: /^0x[a-fA-F0-9]{40}$/g
    },
    {
        network: {
            method: "wallet_addEthereumChain",
            params: [
                {
                    chainId: "0x80",
                    chainName: "Huobi ECO Chain Mainnet",
                    nativeCurrency: {
                        name: "Huobi",
                        symbol: "HT",
                        decimals: 18
                    },
                    rpcUrls: ["https://http-mainnet.hecochain.com"],
                    blockExplorerUrls: ["https://hecoinfo.com"]
                }
            ]
        },
        chainId: "128",
        style: "#22c55e",
        pattern: /^0x[a-fA-F0-9]{40}$/g
    }
]
