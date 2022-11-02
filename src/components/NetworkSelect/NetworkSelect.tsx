import { Stack } from '@mui/material';
import { Fragment, ReactElement } from 'react';
import { networks } from '../../contract/network';
import { NetworkSelectProps } from './NetworkSelect.type';

function NetworkSelect({
    setChain,
    connector,
    activate }: NetworkSelectProps): ReactElement {

    return (
        <Fragment>
            <Stack className='grid grid-cols-1 grid-rows-6 h-[100vh] md:grid-cols-2 md:grid-rows-3'>
                {networks.map((network: any) => (<input
                    type={'button'}
                    key={network.network.params.map((param: { chainId: string }) => param.chainId)}
                    value={network.network.params.map((param: { nativeCurrency: { name: string } }) => param.nativeCurrency.name)}
                    className={network.style}
                    onClick={() => {
                        window.ethereum.request(network.network);
                        setChain(network.chainId);
                        activate(connector);
                    }}
                />))}
            </Stack>
        </Fragment>
    )
}

export default NetworkSelect