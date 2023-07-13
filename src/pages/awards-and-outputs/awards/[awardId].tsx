import { type GetStaticProps, type GetStaticPaths } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { type Award } from '~/types';

import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { getLatestAwards, getAwardById } from '~/utils/award-util';

import Spinner from '~/components/ui/spinner';
import Alert from '~/components/ui/alert';

export default function AwardDetailsPage() {
  const router = useRouter();
  const { awardId } = router.query;

  const { isLoading, error, data } = useQuery(['getAwardById', awardId], () =>
    getAwardById(awardId as string)
  );

  if (isLoading) return <Spinner />;

  if (error) return <Alert variant="danger" error={error.toString()} />;

  // Dev & Testing purposes only
  const awardObject = Object.entries(data as Award).map(([key, value]) => {
    return (
      <div key={key}>
        <strong>{key} :</strong> {value.toString()}
      </div>
    );
  });

  return (
    <>
      {data && (
        <>
          <Head>
            <title>
              {data ? `${data.award_title} | NIHR Funding and Awards` : 'NIHR Funding and Awards'}
            </title>
            <meta name="description" content={data.app_plain_english_summary} />
          </Head>
          <div className="container">
            <h3>{data.award_title}</h3>
            {awardObject}
          </div>
        </>
      )}
    </>
  );
}

export const getStaticProps: GetStaticProps = async context => {
  const { params } = context;
  const awardId = params?.awardId as string;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['getAwardById', awardId], () => getAwardById(awardId));

  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getLatestAwards();

  const paths = data.documents.map(award => ({
    params: { awardId: award.id }
  }));

  return { paths, fallback: 'blocking' };
};
