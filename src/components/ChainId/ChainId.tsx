import { Container } from '@mui/material';
import { ReactElement } from 'react';
import { ChainIdProps } from './ChainId.type';

function ChainId({ chainId }: ChainIdProps): ReactElement {
    return (
        <Container className='flex flex-col justify-center items-center space-y-2'>
            <h1 className='w-full justify-self-start text-lg text-slate-600'>Chain Id :</h1>
            <h1 className='text-md text-slate-300'>
                {chainId}
            </h1>
        </Container>
    )
}

export default ChainId