import { Stack } from '@mui/material';
import { useAtom } from 'jotai';
import { ReactElement } from 'react';
import { initialBalance } from '../../utils/initialValues';
import Account from '../Account';
import Active from '../Active';
import Background from '../Background';
import Balance from '../Balance';
import ChainId from '../ChainId';
import DisconncetButton from '../DisconnectBtn';
import Owner from '../Owner';
import { InjectedConnectorProps } from './type';

function InjectedConnector({
    account,
    active,
    library,
    chainId,
    deactivate,
    chain }: InjectedConnectorProps): ReactElement {

    const [token, setToken] = useAtom(initialBalance);

    return (
        <>
            <Stack direction="column" justifyContent="center" alignItems="center" height="full" width="full">
                <Background />
                <Stack spacing={2} width={"42rem"} padding={4} marginY={2} className='backdrop-blur-sm shadow-lg'>
                    <Stack direction="row" justifyContent="start" alignItems="center" spacing={2} marginY={2} width="full" bgcolor={"none"}>
                        <h1 className='text-xl text-slate-300 font-extrabold'>
                            Wallet
                        </h1>
                        <Active active={active} />
                    </Stack>
                    <Stack spacing={2} paddingY={2} className='backdrop-blur-sm shadow-lg'>
                        <Owner account={account} />
                        <ChainId chainId={chainId} />
                        <Balance library={library} account={account} token={token as any} chainId={chainId} />
                    </Stack>
                    <Stack direction="row" justifyContent="start" alignItems="start" spacing={2} marginY={2} width={"100%"} bgcolor={"none"}>
                        <h1 className='text-xl text-slate-300 font-extrabold'>
                            Transaction
                        </h1>
                    </Stack>
                    <Stack spacing={2} padding={2} zIndex={10} className='backdrop-blur-sm shadow-lg'>
                        <Account token={token} setToken={setToken} account={account} chain={chain} library={library} />
                    </Stack>
                    <Stack direction="row" justifyContent="start" alignItems="start" width="100%" bgcolor={"none"}>
                        <DisconncetButton deactivate={deactivate} />
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}

export default InjectedConnector