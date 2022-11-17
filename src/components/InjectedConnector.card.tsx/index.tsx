import { Stack, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import { ReactElement } from 'react';
import { initialBalance, initialTransactionCompleted } from '../../utils/initialValues';
import Account from '../Account';
import Active from '../Active';
import Background from '../Background';
import Balance from '../Balance';
import ChainId from '../ChainId';
import DisconncetButton from '../DisconnectBtn';
import MuiStackSx from '../MuiStackSx';
import Owner from '../Owner';
import { InjectedConnectorProps } from './type';

function InjectedConnector({
    account,
    active,
    library,
    chainId,
    deactivate,
    chain,
    pattern }: InjectedConnectorProps): ReactElement {

    const [token, setToken] = useAtom(initialBalance);
    const [isTransactionComplete, setIsTransactionComplete] = useAtom(initialTransactionCompleted);

    return (
        <>
            <Stack direction="column" justifyContent="center" alignItems="center" height="full" width="full">
                <Background />
                <Stack spacing={2} width={"42rem"} padding={4} marginY={2} sx={MuiStackSx}>
                    <Stack direction="row" justifyContent="start" alignItems="center" spacing={2} marginY={2} width="full" bgcolor={"none"}>
                        <Typography variant={"h1"} fontSize={"1.25rem"} lineHeight={"1.75rem"} color={"#cbd5e1"} fontWeight={800}>
                            Wallet
                        </Typography>
                        <Active active={active} />
                    </Stack>
                    <Stack spacing={2} paddingY={2} sx={MuiStackSx}>
                        <Owner account={account} />
                        <ChainId chainId={chainId} />
                        <Balance library={library} account={account} token={token as any} chainId={chainId} isTransactionComplete={isTransactionComplete} />
                    </Stack>
                    <Stack direction="row" justifyContent="start" alignItems="start" spacing={2} marginY={2} width={"100%"} bgcolor={"none"}>
                        <Typography variant={"h1"} fontSize={"1.25rem"} lineHeight={"1.75rem"} color={"#cbd5e1"} fontWeight={800}>
                            Transaction
                        </Typography>
                    </Stack>
                    <Stack spacing={2} padding={2} zIndex={10} sx={MuiStackSx}>
                        <Account token={token} setToken={setToken} account={account} chain={chain} library={library} pattern={pattern} isTransactionComplete={isTransactionComplete} setIsTransactionComplete={setIsTransactionComplete} />
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