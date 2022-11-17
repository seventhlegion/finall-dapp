import { Grid } from '@mui/material';
import { ReactElement } from 'react';
import { networks } from '../../contract/networkDetails';
import NetworkButton from '../NetworkButton';
import { NetworkSelectProps } from './type';

function NetworkSelect({
    setChain,
    connector,
    activate,
    setPattern }: NetworkSelectProps): ReactElement {
    return (
        <Grid container columns={{ xs: 1, md: 2 }} height="100vh">
            {networks.map((network: any) => (
                <Grid key={network.chainId} item xs={10} md={1}>
                    <NetworkButton network={network} setChain={setChain} activate={activate} connector={connector} setPattern={setPattern} />
                </Grid>
            ))}
        </Grid>
    )
}

export default NetworkSelect;