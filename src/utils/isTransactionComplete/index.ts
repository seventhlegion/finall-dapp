import { TransactionReceipt, Web3Provider } from "@ethersproject/providers";

export const sleep = (milliseconds: number) =>
    new Promise((resolve) => setTimeout(resolve, milliseconds));

export const waitForTransaction = async (
    library: Web3Provider,
    hash: string,
    expectedBlockTime = 1000,
): Promise<TransactionReceipt> => {
    let transactionReceipt: TransactionReceipt | null = null;
    while (transactionReceipt == null) {
        // Waiting expectedBlockTime until the transaction is mined 
        transactionReceipt = await library.getTransactionReceipt(hash);

        await sleep(expectedBlockTime);
    }

    return transactionReceipt;
};