import { Container, Stack } from '@mui/material';
import { atom, useAtom } from 'jotai';
import { Fragment, ReactElement } from 'react';
import { InjectedConnectorProps } from '../../types/types';
import Account from '../Account/Account';
import Active from '../Active/Active';
import Background from '../Background/Background';
import Balance from '../Balance/Balance';
import ChainId from '../ChainId/ChainId';
import DisconncetButton from '../DisconnectBtn/DisconncetButton';
import Owner from '../Owner/Owner';

export const initialBalance = atom(undefined);

function InjectedConnector({
    account,
    active,
    library,
    chainId,
    deactivate,
    chain }: InjectedConnectorProps): ReactElement {

    const [token, setToken] = useAtom(initialBalance);

    return (
        <Fragment>
            <Stack className='flex flex-col justify-center items-start w-full h-full'>
                <Background />
                <Container className='flex flex-col justify-center items-center backdrop-blur-sm bg-black/40 shadow-lg rounded-lg max-w-2xl space-y-5 my-10 py-5'>
                    <Container className='flex flex-row justify-start items-center space-x-2'>
                        <h1 className='text-xl text-slate-300 font-extrabold'>
                            Wallet
                        </h1>
                        <Active active={active} />
                    </Container>
                    <Container className='flex flex-col justify-center items-center space-y-5 border border-slate-300 shadow-lg rounded-lg py-5 bg-slate-400/20'>
                        <Owner account={account} />
                        <ChainId chainId={chainId} />
                        <Balance library={library} account={account} token={token as any} chainId={chainId} />
                    </Container>
                    <Container className='flex flex-row justify-start items-center space-x-2'>
                        <h1 className='text-xl text-slate-300 font-extrabold'>
                            Transaction
                        </h1>
                    </Container>
                    <Container className='flex flex-col justify-center items-center space-y-5 bg-slate-400/20 border border-slate-300 shadow-lg rounded-lg py-5'>
                        <Account token={token} setToken={setToken} account={account} chain={chain} library={library} />
                    </Container>
                    <Container className='flex flex-row justify-start items-center'>
                        <DisconncetButton deactivate={deactivate} />
                    </Container>
                </Container>
            </Stack>
        </Fragment>
    )
}

export default InjectedConnector