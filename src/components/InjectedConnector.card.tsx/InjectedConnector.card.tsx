import { Container, Stack } from '@mui/material';
import { atom, useAtom } from 'jotai';
import { Fragment, ReactElement } from 'react';
import Account from '../Account/Account';
import Active from '../Active/Active';
import Background from '../Background/Background';
import Balance from '../Balance/Balance';
import ChainId from '../ChainId/ChainId';
import DisconncetButton from '../DisconnectBtn/DisconncetButton';
import Owner from '../Owner/Owner';
import { InjectedConnectorProps } from './InjectedConnector.type';

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
                <Container className='flex flex-col justify-center items-center backdrop-blur-sm shadow-lg rounded-lg max-w-2xl space-y-5 my-10 py-5 bg-neutral-900/10'>
                    <Stack className='flex flex-row justify-start items-center space-x-2 my-2 w-full'>
                        <h1 className='text-xl text-slate-300 font-extrabold'>
                            Wallet
                        </h1>
                        <Active active={active} />
                    </Stack>
                    <Container className='flex flex-col justify-center items-center space-y-5 shadow-lg rounded-lg py-5 bg-neutral-900/50'>
                        <Owner account={account} />
                        <ChainId chainId={chainId} />
                        <Balance library={library} account={account} token={token as any} chainId={chainId} />
                    </Container>
                    <Stack className='flex flex-row justify-start items-start space-x-2 my-2 w-full'>
                        <h1 className='text-xl text-slate-300 font-extrabold'>
                            Transaction
                        </h1>
                    </Stack>
                    <Container className='flex flex-col justify-center items-center space-y-5 shadow-lg rounded-lg py-5 bg-neutral-900/50'>
                        <Account data-testid="AccountContainer" token={token} setToken={setToken} account={account} chain={chain} library={library} />
                    </Container>
                    <Stack className='flex flex-row justify-start items-start w-full'>
                        <DisconncetButton data-testid="DisconnectButtonComponent" deactivate={deactivate} />
                    </Stack>
                </Container>
            </Stack>
        </Fragment>
    )
}

export default InjectedConnector