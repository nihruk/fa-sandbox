import Head from 'next/head';

import { type GetStaticProps } from 'next';

import { getLatestAwards } from '~/utils/award-util';
import LatestAwards from '~/components/awards/latest-awards';

import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';

export default function HomePage() {
  const { isLoading, error, data } = useQuery(['getLatestAwards'], () => getLatestAwards());

  if (isLoading) return 'Loading...';

  // TODO: Add a error message
  if (error) return `An error has occurred`;

  return (
    <>
      <Head>
        <title>NIHR Funding and Awards</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {data && (
        <div className="container">
          <LatestAwards awards={data.documents} />
        </div>
      )}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['getLatestAwards'], () => getLatestAwards());

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
};
