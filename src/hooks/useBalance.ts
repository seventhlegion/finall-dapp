import { Web3Provider } from "@ethersproject/providers";
import { QueryFunction, QueryKey, useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { BigNumber } from "ethers";
import { formatEther } from "ethers/lib/utils";
import { useERC20Contract } from "./useContract";

export const useBalance = (
    library?: Web3Provider,
    account?: string | Promise<string>,
    options?: UseQueryOptions,
    erc20Address?: string,
    isCoin?: boolean,
    chainId?: number | string) => {

    const contract = useERC20Contract(false, erc20Address);

    const balanceOfContract: QueryFunction = async () => {
        if (!!isCoin || isCoin === undefined) {
            return library?.getBalance(account as string);
        } else {
            return contract?.functions?.balanceOf(erc20Address);
        }
    }

    const { data }: UseQueryResult = useQuery(['balanceOf', erc20Address, chainId] as QueryKey, balanceOfContract, { ...options });

    if (!data) return 0;

    if (isCoin === false) return formatEther(data?.[0] as BigNumber);

    return formatEther(data as BigNumber)
}