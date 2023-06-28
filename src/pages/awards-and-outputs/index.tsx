import React from 'react';
import { type NextPage } from 'next';
import Head from 'next/head';

import Awards from '~/components/awards/awards';
import Outputs from '~/components/outputs/outputs';

const AwardsAndOutputsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Awards and Outputs | NIHR Funding and Awards</title>
        <meta name="description" content="" />
      </Head>
      <div className="container">
        <Awards />
        <Outputs />
      </div>
    </>
  );
};

export default AwardsAndOutputsPage;
