import { type NextPage } from 'next';
import Head from 'next/head';

import Awards from '~/components/awards';
import Outputs from '~/components/outputs';
import SearchBar from '~/components/search-bar';

const AwardsAndOutputs: NextPage = () => {
  return (
    <>
      <Head>
        <title>Awards and Outputs | NIHR Funding and Awards</title>
        <meta name="description" content="" />
      </Head>
      <SearchBar />
      <h1>Awards and Outputs</h1>
      <Awards />
      <Outputs />
    </>
  );
};

export default AwardsAndOutputs;
