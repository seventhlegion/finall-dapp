export const networks:
    {
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
    }[] = [
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
            style: "h-full w-full text-violet-500 text-6xl font-extrabold hover:bg-violet-500 hover:text-neutral-900 transition duration-200 ease-in-out"
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
            style: "h-full w-full text-orange-500 text-6xl font-extrabold hover:bg-orange-500 hover:text-neutral-900 transition duration-200 ease-in-out"
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
            "style": "h-full w-full text-red-500 text-6xl font-extrabold hover:bg-red-500 hover:text-neutral-900 transition duration-200 ease-in-out"
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
            style: "h-full w-full text-red-300 text-6xl font-extrabold hover:bg-red-300 hover:text-neutral-900 transition duration-200 ease-in-out"
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
            style: "h-full w-full text-sky-500 text-6xl font-extrabold hover:bg-sky-500 hover:text-neutral-900 transition duration-200 ease-in-out"
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
            style: "h-full w-full text-green-500 text-6xl font-extrabold hover:bg-green-500 hover:text-neutral-900 transition duration-200 ease-in-out"
        }
    ]
