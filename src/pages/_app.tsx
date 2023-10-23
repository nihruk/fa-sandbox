import { useState } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from '~/components/layout/layout';
import '~/styles/globals.css';
import { SearchStateProvider } from '~/context/search-context';

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
  type DehydratedState
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function MyApp({
  Component,
  pageProps
}: AppProps<{ dehydratedState: DehydratedState }>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <SearchStateProvider>
      <Layout>
        <Head>
          <title>NIHR Funding and Awards</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Component {...pageProps} />
          </Hydrate>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </Layout>
    </SearchStateProvider>
  );
}
