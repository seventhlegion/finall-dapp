import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { atom, useAtom } from 'jotai';
import { Fragment } from 'react';
import InjectedConnector from '../components/InjectedConnector.card.tsx/InjectedConnector.card';
import NetworkSelect from '../components/NetworkSelect/NetworkSelect';
import { metaMaskConnector } from '../connector/injectedConector/injectedConnector';

export const initialChainId = atom<string>('');

export default function Home() {

  const [chain, setChain] = useAtom(initialChainId);

  const metaMask = metaMaskConnector();

  const { account, activate, active, library, chainId, deactivate }: any = useWeb3React<Web3Provider>();

  return (
    <Fragment>
      {active
        ?
        (<InjectedConnector
          data-testid="InjectedConnector"
          account={account}
          active={active}
          library={library}
          chainId={chainId}
          chain={chain}
          deactivate={deactivate} />
        )
        : (<NetworkSelect
          data-testid="NetworkSelect"
          setChain={setChain}
          connector={metaMask}
          activate={activate} />
        )
      }
    </Fragment>
  )
}
