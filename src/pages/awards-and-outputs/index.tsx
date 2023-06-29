import React from 'react';
import { type NextPage } from 'next';
import Head from 'next/head';

//import Awards from '~/components/awards/awards';
import Outputs from '~/components/outputs/outputs';

// const dummyAwards = [
//   { id: 1, award_title: 'Award 1' },
//   { id: 2, award_title: 'Award 2' },
//   { id: 3, award_title: 'Award 3' }
// ];

const AwardsAndOutputsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Awards and Outputs | NIHR Funding and Awards</title>
        <meta name="description" content="" />
      </Head>
      <div className="container">
        <Outputs />
      </div>
    </>
  );
};

export default AwardsAndOutputsPage;
