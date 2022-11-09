import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { useAtom } from 'jotai';
import Head from 'next/head';
import InjectedConnector from '../components/InjectedConnector.card.tsx';
import NetworkSelect from '../components/NetworkSelect';
import { metaMaskConnector } from '../connector/injectedConector';
import { initialChainId } from '../utils/initialValues';

export default function Home() {

  const [chain, setChain] = useAtom(initialChainId);

  const metaMask = metaMaskConnector();

  const { account, activate, active, library, chainId, deactivate } = useWeb3React<Web3Provider>();

  return (
    <>
      <Head>
        <title>
          Wallet Hole
        </title>
      </Head>
      {active
        ?
        (<InjectedConnector
          data-testid="InjectedConnector"
          account={account as string}
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
    </>
  )
}
