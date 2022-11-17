import { Box, Typography } from '@mui/material';
import { ReactElement } from 'react';
import { HashProps } from './type';

function Hash({ transfer }: HashProps): ReactElement {

    if (!!transfer?.hash) {
        return (
            <Box flexGrow={1}>
                <Typography variant={"h1"} color={"#cbd5e1"}>
                    Transaction Completed 😃
                </Typography>
            </Box>
        )
    } else {
        return (
            <Box flexGrow={1} />
        )
    }
}

export default Hash;