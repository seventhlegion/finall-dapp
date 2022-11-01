import { Button, Stack } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { parseEther } from "ethers/lib/utils";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import useAllowance from "../../hooks/useAllowance";
import useApprove from "../../hooks/useApprove";
import useTransferFrom from "../../hooks/useTransferFrom";
import { AccountProps } from "../../types/types";
import Address from "../Address/Address";
import Amount from "../Amount/Amount";
import Hash from "../Hash/Hash";
import Token from "../Token/Token";

function Account({ token, setToken, account, chain }: AccountProps) {

    const { formState: { errors }, handleSubmit, control } = useForm();

    const [address, setAddress] = useState<string>('');
    const [amount, setAmount] = useState<string>();

    const [approve, setApprove] = useState<boolean>(false);
    const [allowace, setAllowace] = useState<boolean>(false);
    const [transfer, setTransfer] = useState<boolean>(false);

    const [transactionHash, setTransactionHash] = useState();

    // Approve ...........................................................................
    const mutationApprove = useApprove(address, parseEther(amount || '0'), token?.value as string, {
        onSuccess: () => setApprove(true),
        onError: (error) => {
            setApprove(false);
            console.log(error);
        },
    })

    const onApprove = () => {
        mutationApprove.mutate();
    }

    // Allowance .................................
    useAllowance(account, address, token?.value as string, {
        onSuccess: () => setAllowace(true),
        onError: (error) => {
            setAllowace(false);
            console.log(error);
        },
    })

    // TransferFrom ........................................................................................
    const mutationTrasferFrom = useTransferFrom(account, address, parseEther(amount || '0'), token?.value as string, {
        onSuccess: (res: any) => {
            setTransfer(true);
            setTransactionHash(res);
        },
        onError: (error) => {
            setTransfer(false)
            console.log(error);
        },
    })

    const onTransferFrom = () => {
        mutationTrasferFrom.mutate();
    }

    // OnSubmit.................
    const action = async () => {
        if (approve) {
            return onTransferFrom();
        } else {
            return onApprove();
        }
    }
    const mutation = useMutation(action);

    const onSubmit = async (data: any) => {
        setToken(data.token)
        setAddress(data.address);
        setAmount(data.amount);

        return mutation.mutate();
    }

    return (
        <Fragment>
            <form
                className="flex flex-col justify-center items-center w-full space-y-4"
                onSubmit={handleSubmit(onSubmit)}>
                <Token chain={chain} setToken={setToken} errors={errors} control={control} />
                <Address control={control} errors={errors} />
                <Amount control={control} errors={errors} />
                <Stack className="flex flex-row items-center w-full">
                    <Hash transfer={transactionHash} />
                    <Button
                        className="w-1/3 font-bold text-black/50 border-black/50 hover:text-green-500 hover:border-green-500 hover:bg-none transition-all duration-200"
                        variant="outlined"
                        type="submit">
                        {approve ? "TRANSFER" : "APPROVE"}
                    </Button>
                </Stack>
            </form>
        </Fragment >
    )
}

export default Account