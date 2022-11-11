import { Button, Stack } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { parseEther } from "ethers/lib/utils";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAllowance from "../../hooks/useAllowance";
import useApprove from "../../hooks/useApprove";
import useTransferFrom from "../../hooks/useTransferFrom";
import Address from "../Address";
import Amount from "../Amount";
import Hash from "../Hash";
import Token from "../Token";
import { AccountProps, FormInput } from "./type";


function Account({ token, setToken, account, chain }: AccountProps) {

    const { formState: { errors }, handleSubmit, control } = useForm<FormInput>();

    const [address, setAddress] = useState<string>('');
    const [amount, setAmount] = useState<string>();

    const [approve, setApprove] = useState<boolean>(false);
    const [allowace, setAllowace] = useState<boolean>(false);
    const [transfer, setTransfer] = useState<boolean>(false);

    const [transactionHash, setTransactionHash] = useState<string>();

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
        <form
            className="flex flex-col justify-center items-center w-full space-y-4"
            data-testid="form"
            onSubmit={handleSubmit(onSubmit)}>
            <Token chain={chain} setToken={setToken} control={control} error={errors.token?.type === 'required'} />
            <Address control={control} error={errors.address?.type === 'required'} />
            <Amount control={control} error={errors.amount?.type === 'required'} />
            <Stack direction="row" justifyContent="center" width="100%">
                <Hash transfer={transactionHash} />
                <Button
                    sx={{
                        width: "33.333333%",
                        borderRadius: "0.5rem"
                    }}
                    color={"success"}
                    variant="outlined"
                    type="submit">
                    {approve ? "TRANSFER" : "APPROVE"}
                </Button>
            </Stack>
        </form>
    )
}

export default Account