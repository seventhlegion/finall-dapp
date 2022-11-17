import { UseMutateAsyncFunction, useMutation, UseMutationOptions } from '@tanstack/react-query';
import { BigNumber } from 'ethers';
import { parseUnits } from 'ethers/lib/utils';
import { useERC20Contract } from './useContract';

const useApprove = (
    spender?: string,
    amount?: BigNumber,
    erc20Address?: string,
    options?: UseMutationOptions) => {

    const contract = useERC20Contract(true, erc20Address);

    const approve: UseMutateAsyncFunction = async () => {
        return await contract?.functions?.approve(spender, amount, { gasPrice: parseUnits('100', 'gwei'), gasLimit: 100000 });
    }

    const mutation = useMutation(approve, { ...options });

    return mutation;

}

export default useApprove