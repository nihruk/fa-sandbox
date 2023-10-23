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
  const page = 2;

  const escapedValue = encodeURIComponent(query.trim());
  const filterParams = ctx.filterParams;
  const sortStr = ctx.sortDesc ? 'desc' : 'asc';
  const sort = '&sort=' + ctx.sortBy + ':' + sortStr;

  console.log('re-rendering -- listing page');

  const {
    isLoading: loadingDefaultContent,
    error: errorDefaultContent,
    data: dataDefaultContent
  } = useQuery(['getLatestAwards', page], () => getLatestAwards());

  const {
    isFetching: loadingSearchResults,
    error: errorSearchResults,
    data: dataSearchResults
  } = useQuery(
    ['getSearchResults', escapedValue],
    () => getSearchResults(escapedValue, filterParams, sort),
    {
      enabled: status === 'submitting'
    }
  );

  if (loadingDefaultContent) return <Spinner />;
  if (errorDefaultContent)
    return <Alert variant="danger" message={errorDefaultContent.toString()} />;

  if (loadingSearchResults) return <Spinner />;
  if (errorSearchResults) return <Alert variant="danger" message={errorSearchResults.toString()} />;

  let documents, numFound;

  if (!dataSearchResults) {
    documents = dataDefaultContent?.documents;
    numFound = dataDefaultContent?.numFound;
  } else {
    documents = dataSearchResults?.documents;
    numFound = dataSearchResults?.numFound;
  }

  return (
    <>
      <Head>
        <title>Awards and Outputs | NIHR Funding and Awards</title>
        <meta name="description" content="" />
      </Head>
      {query && <h1>{query}</h1>}
      <div>numFound: {numFound}</div>

      {documents && (
        <>
          <Tabs defaultActiveKey="awards" className="mb-3">
            <Tab eventKey="awards" title="Awards">
              <h2>Awards</h2>
              <Awards awards={documents} />
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
