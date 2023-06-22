import { type NextPage } from 'next';
import Head from 'next/head';

import Awards from '~/components/awards/awards';
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
      <div className="container">
        <Awards />
        <Outputs />
      </div>
    </>
  );
};

export default AwardsAndOutputs;
