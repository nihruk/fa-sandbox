import React from 'react';
import { type NextPage } from 'next';
import Head from 'next/head';
import LatestAwards from '~/components/awards/latest-awards';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>NIHR Funding and Awards</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LatestAwards />
    </>
  );
};

export default HomePage;
