import React from 'react';
import Head from 'next/head';

import { type InferGetStaticPropsType, type GetStaticProps } from 'next';
import { type Data } from '~/types';

import Awards from '~/components/awards/awards';

export default function HomePage({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>NIHR Funding and Awards</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <h2>Latest Awards</h2>
        <Awards awards={data.documents} />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<{ data: Data }> = async () => {
  const response = await fetch('https://fundingawards.nihr.ac.uk/api/latest/6');
  const data = (await response.json()) as Data;

  return {
    props: {
      data
    }
  };
};
