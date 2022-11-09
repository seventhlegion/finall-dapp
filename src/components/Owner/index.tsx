import { Container } from '@mui/material';
import { ReactElement } from "react";
import { OwnerProps } from './type';

function Owner({ account }: OwnerProps): ReactElement {
    return (
        <Container>
            <h1 className='w-full justify-self-start text-lg text-slate-600'>Wallet Address :</h1>
            <h1 className='text-md text-slate-300 text-center'>
                {account}
            </h1>
        </Container>
    )
}

export default Owner