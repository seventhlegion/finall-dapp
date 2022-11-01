import { Web3Provider } from '@ethersproject/providers';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Web3ReactProvider } from '@web3-react/core';
import { Provider } from 'jotai';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

function getLib(provider: any): Web3Provider {
  const lib = new Web3Provider(provider, 'any');
  lib.pollingInterval = 12000;
  return lib;
}

export default function App({ Component, pageProps }: AppProps) {

  const [queryClient] = useState(() => new QueryClient);

  return (
    <Web3ReactProvider getLibrary={getLib}>
      <QueryClientProvider client={queryClient}>
        <Provider>
          <Component {...pageProps} />
        </Provider>
      </QueryClientProvider>
    </Web3ReactProvider>
  )
}
