import { Container, Typography } from '@mui/material';
import { ReactElement } from "react";
import { OwnerProps } from './type';

function Owner({ account }: OwnerProps): ReactElement {
    return (
        <Container>
            <Typography variant='h1' justifySelf={"start"} fontSize={"1.125rem"} lineHeight={"1.75rem"} color={'#64748b'} >Wallet Address :</Typography>
            <Typography variant='h1' color={"#cbd5e1"} fontSize={"1rem"} lineHeight={"1.5rem"} textAlign={"center"}>
                {account}
            </Typography>
        </Container>
    )
}

export default Owner