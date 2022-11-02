import { Container } from '@mui/material';
import { Fragment, ReactElement } from "react";
import { OwnerProps } from './Owner.type';

function Owner({ account }: OwnerProps): ReactElement {
    return (
        <Fragment>
            <Container className='flex flex-col justify-center items-center space-y-2'>
                <h1 className='w-full justify-self-start text-lg text-slate-600'>Wallet Address :</h1>
                <h1 className='text-md text-slate-300'>
                    {account}
                </h1>
            </Container>
        </Fragment>

    )
}

export default Owner