import { UseMutateAsyncFunction, useMutation, UseMutationOptions } from '@tanstack/react-query';
import { BigNumber } from 'ethers';
import { parseUnits } from 'ethers/lib/utils';
import { useERC20Contract } from './useContract';

const useTransferFrom = (
  owner: string | Promise<string> | undefined,
  spender: string,
  amount: BigNumber,
  erc20Address: string,
  options?: UseMutationOptions) => {

  const contract = useERC20Contract(true, erc20Address);

  const transferFrom: UseMutateAsyncFunction = async () => {
    return await contract?.functions?.transferFrom(owner, spender, amount, { gasPrice: parseUnits('100', 'gwei'), gasLimit: 100000 })
  }

  const mutation = useMutation(transferFrom, { ...options })

  return mutation

}

export default useTransferFrom