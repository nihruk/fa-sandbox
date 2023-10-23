import { type GetStaticProps } from 'next';
import Head from 'next/head';

import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { getLatestAwards } from '~/utils/award-util';

import LatestAwards from '~/components/awards/latest-awards';
import Spinner from '~/components/ui/spinner';
import Alert from '~/components/ui/alert';

export default function HomePage() {
  const { isLoading, error, data } = useQuery(['getLatestAwards'], () => getLatestAwards());

  if (isLoading) return <Spinner />;

  if (error) return <Alert variant="danger" message={error.toString()} />;

  console.log('re-rendering -- home page');

  return (
    <>
      <Head>
        <title>NIHR Funding and Awards</title>
        <meta name="description" content="" />
      </Head>

      {data && (
        <>
          <h3>Latest Awards</h3>
          <LatestAwards awards={data.documents} />
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
