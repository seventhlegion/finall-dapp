import { Container, Typography } from '@mui/material';
import { ReactElement } from 'react';
import { ChainIdProps } from './type';

function ChainId({ chainId }: ChainIdProps): ReactElement {
    return (
        <Container>
            <Typography variant='h1' justifySelf={"start"} fontSize={"1.125rem"} lineHeight={"1.75rem"} color={'#64748b'} >Chain Id :</Typography>
            <Typography variant='h1' color={"#cbd5e1"} fontSize={"1rem"} lineHeight={"1.5rem"} textAlign={"center"}>
                {chainId}
            </Typography>
        </Container>
    )
}

export default ChainId