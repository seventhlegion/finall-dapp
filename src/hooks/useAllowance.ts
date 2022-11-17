import { QueryFunction, QueryKey, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { useERC20Contract } from './useContract';

const useAllowance = (
    owner?: string | Promise<string>,
    spender?: string,
    erc20Address?: string,
    options?: UseQueryOptions) => {

    const contract = useERC20Contract(false, erc20Address);

    const allowance: QueryFunction = async () => {
        return await contract?.functions?.allowance(owner, spender);
    }

    const allowanceQuery: UseQueryResult = useQuery(['allowance', owner, spender] as QueryKey, allowance, { options } as UseQueryOptions)

    return allowanceQuery;

}

export default useAllowance