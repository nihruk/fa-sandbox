import { type GetStaticProps } from 'next';
import Head from 'next/head';

import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { getLatestAwards } from '~/utils/award-util';

import Awards from '~/components/awards/awards';
import Outputs from '~/components/outputs/outputs';
import Loader from '~/components/ui/loader';
import Error from '~/components/ui/error';

export default function AwardsAndOutputsPage() {
  const { isLoading, error, data } = useQuery(['getLatestAwards'], () => getLatestAwards());

  if (isLoading) return <Loader />;

  if (error) return <Error error={error.toString()} />;
  return (
    <>
      <Head>
        <title>Awards and Outputs | NIHR Funding and Awards</title>
        <meta name="description" content="" />
      </Head>
      {data && (
        <div className="container">
          <h2>Awards</h2>
          <Awards awards={data.documents} />
          <Outputs />
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
