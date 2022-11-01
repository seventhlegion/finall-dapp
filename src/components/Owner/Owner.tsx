import { Container } from '@mui/material';
import { Fragment, ReactElement } from "react";

function Owner({ account }: any): ReactElement {
    return (
        <Fragment>
            <Container className='flex flex-col justify-center items-center space-y-2'>
                <h1 className='w-full justify-self-start text-xl text-slate-400'>Account Address :</h1>
                <h1 className='text-xl text-slate-200'>
                    {account}
                </h1>
            </Container>
        </Fragment>

    )
}

export default Owner