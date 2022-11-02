import { QueryFunction, QueryKey, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { useERC20Contract } from './useContract';

const useAllowance = (
    owner: string | Promise<string> | undefined,
    spender: string,
    erc20Address: string,
    options?: UseQueryOptions) => {

    const contract = useERC20Contract(false, erc20Address);

    const allowance: QueryFunction = async () => {
        if (!contract) return null;
        return await contract?.functions?.allowance(owner, spender);
    }

    const allowanceQuery: UseQueryResult = useQuery(['allowance'] as QueryKey, allowance, { options } as UseQueryOptions)

    return allowanceQuery;

}

export default useAllowance