import { Container, Stack } from '@mui/material';
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
            <Stack direction="column" justifyContent="center" alignItems="start" height="full" width="full">
                <Background />
                <Container className='backdrop-blur-sm shadow-lg rounded-lg max-w-2xl space-y-5 my-10 py-5 bg-neutral-900/10'>
                    <Stack direction="row" justifyContent="start" alignItems="center" spacing={2} marginY={2} width="full">
                        <h1 className='text-xl text-slate-300 font-extrabold'>
                            Wallet
                        </h1>
                        <Active active={active} />
                    </Stack>
                    <Container className='shadow-lg rounded-lg py-5 bg-neutral-900/50 space-y-4'>
                        <Owner account={account} />
                        <ChainId chainId={chainId} />
                        <Balance library={library} account={account} token={token as any} chainId={chainId} />
                    </Container>
                    <Stack direction="row" justifyContent="start" alignItems="start" spacing={2} marginY={2} width={"100%"}>
                        <h1 className='text-xl text-slate-300 font-extrabold'>
                            Transaction
                        </h1>
                    </Stack>
                    <Container className='shadow-lg rounded-lg py-5 bg-neutral-900/50'>
                        <Account token={token} setToken={setToken} account={account} chain={chain} library={library} />
                    </Container>
                    <Stack direction="row" justifyContent="start" alignItems="start" width="100%">
                        <DisconncetButton deactivate={deactivate} />
                    </Stack>
                </Container>
            </Stack>
        </>
    )
}

export default InjectedConnector