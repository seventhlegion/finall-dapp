import { Container } from '@mui/material';
import { Fragment, ReactElement } from "react";
import { useBalance } from '../../hooks/useBalance';
import { BalanceProps } from '../../types/types';

function Balance({ library, account, token, chainId }: BalanceProps): ReactElement {

    const balance = useBalance(library, account, { refetchInterval: 12000 }, token?.value, token?.isCoin, chainId);

    return (
        <Fragment>
            <Container className='flex flex-col justify-center items-center space-y-2'>
                <h1 className='w-full justify-self-start text-xl text-slate-400'>Balance : </h1>
                <h1 className='text-xl text-slate-200'>
                    {balance}
                </h1>
            </Container>
        </Fragment>
    )
}

export default Balance