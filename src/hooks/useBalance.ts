import { Web3Provider } from "@ethersproject/providers";
import { QueryFunction, QueryKey, useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { BigNumber } from "ethers";
import { formatEther } from "ethers/lib/utils";
import { useERC20Contract } from "./useContract";

export const useBalance = (
    library: Web3Provider,
    account: string,
    options?: UseQueryOptions,
    erc20Address?: string,
    isCoin?: boolean,
    chainId?: number) => {

    const contract = useERC20Contract(false, erc20Address);

    const balanceOfContract: QueryFunction = async () => {
        if (isCoin === true) {

            return library?.getBalance(account);

        } else if (isCoin === false) {

            return contract?.functions?.balanceOf(erc20Address);
        } else {

            return library?.getBalance(account);
        }
    }

    const { data }: UseQueryResult = useQuery(['balanceOf', erc20Address, chainId] as QueryKey, balanceOfContract, { ...options });

    if (!data) return 0;

    if (isCoin === false) return formatEther(data?.[0] as BigNumber);

    return formatEther(data as BigNumber)
}