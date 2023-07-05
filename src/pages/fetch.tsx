import React from 'react';
import { type GetStaticProps } from 'next';
import Head from 'next/head';
import Awards from '~/components/awards/awards';

import { getLatestAwards } from '~/utils/award-util';

import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';

export default function Posts() {
  const { isLoading, isSuccess, error, data } = useQuery(['getLatestAwards'], () =>
    getLatestAwards()
  );

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred';

  return (
    <>
      <Head>
        <title>NIHR Funding and Awards</title>
      </Head>

      {isSuccess && (
        <div className="container">
          <Awards awards={data.documents} />
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
