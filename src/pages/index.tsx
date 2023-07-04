import React from 'react';
import Head from 'next/head';

import { type InferGetStaticPropsType, type GetStaticProps } from 'next';
import { type Data } from '~/types';

import { getLatestAwards } from '~/utils/award-util';
import LatestAwards from '~/components/awards/latest-awards';

export default function HomePage({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>NIHR Funding and Awards</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <LatestAwards awards={data.documents} />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<{ data: Data }> = async () => {
  const data = await getLatestAwards();

  return {
    props: {
      data
    }
  };
};
