import { Container, Typography } from '@mui/material';
import { Fragment, ReactElement } from "react";
import { useBalance } from '../../hooks/useBalance';
import { BalanceProps } from './type';

function Balance({ library, account, token, chainId, isTransactionComplete }: BalanceProps): ReactElement {

    const balance = useBalance(library, account, token?.value, token?.isCoin, chainId, isTransactionComplete);

    return (
        <Fragment>
            <Container>
                <Typography variant='h1' justifySelf={"start"} fontSize={"1.125rem"} lineHeight={"1.75rem"} color={'#64748b'} >Balance : </Typography>
                <Typography variant='h1' color={"#cbd5e1"} fontSize={"1rem"} lineHeight={"1.5rem"} textAlign={"center"}>
                    {balance}
                </Typography>
            </Container>
        </Fragment>
    )
}

export default Balance