import { type GetStaticProps } from 'next';
import Head from 'next/head';

import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { getLatestAwards } from '~/utils/award-util';

import Awards from '~/components/awards/awards';
import Outputs from '~/components/outputs/outputs';
import Spinner from '~/components/ui/spinner';
import Alert from '~/components/ui/alert';

export default function AwardsAndOutputsPage() {
  const { isLoading, error, data } = useQuery(['getLatestAwards'], () => getLatestAwards());

  if (isLoading) return <Spinner />;

  if (error) return <Alert variant="danger" error={error.toString()} />;

  return (
    <>
      <Head>
        <title>Awards and Outputs | NIHR Funding and Awards</title>
        <meta name="description" content="" />
      </Head>
      {data && (
        <>
          <h2>Awards</h2>
          <Awards awards={data.documents} />
          <h2>Outputs</h2>
          <Outputs />
        </>
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
