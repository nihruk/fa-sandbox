import { type GetStaticProps } from 'next';
import Head from 'next/head';

import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { getLatestAwards, getSearchResults } from '~/utils/award-util';
import { useSearchState } from '~/context/search-context';

import Awards from '~/components/awards/awards';
import Outputs from '~/components/outputs/outputs';
import Spinner from '~/components/ui/spinner';
import Alert from '~/components/ui/alert';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function AwardsAndOutputsPage() {
  const ctx = useSearchState();
  const query = ctx.query;
  const status = ctx.status;
  const changeStatus = ctx.statusHandler;

  const {
    isLoading: loadingSearchResults,
    error: errorSearchResults,
    data: dataSearchResults
  } = useQuery(['getSearchResults', query], () => getSearchResults(query), {
    enabled: status === 'submitting'
  });
  if (loadingSearchResults) return <Spinner />;
  if (errorSearchResults) return <Alert variant="danger" message={errorSearchResults.toString()} />;

  return (
    <>
      <Head>
        <title>Awards and Outputs | NIHR Funding and Awards</title>
        <meta name="description" content="" />
      </Head>
      {dataSearchResults && (
        <>
          <Tabs defaultActiveKey="awards" className="mb-3">
            <Tab eventKey="awards" title="Awards">
              <h2>Awards</h2>
              <Awards awards={dataSearchResults.documents} />
            </Tab>
            <Tab eventKey="outputs" title="Outputs">
              <h2>Outputs</h2>
              <Outputs />
            </Tab>
          </Tabs>
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
