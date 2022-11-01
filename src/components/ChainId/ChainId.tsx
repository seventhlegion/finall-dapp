import { Container } from '@mui/material';
import { ReactElement } from 'react';

function ChainId({ chainId }: any): ReactElement {
    return (
        <Container className='flex flex-col justify-center items-center space-y-2'>
            <h1 className='w-full justify-self-start text-xl text-slate-400'>Chain Id :</h1>
            <h1 className='text-xl text-slate-200'>
                {chainId}
            </h1>
        </Container>
    )
}

export default ChainId