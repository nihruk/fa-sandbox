import React from 'react';
import Head from 'next/head';

import { type InferGetStaticPropsType, type GetStaticProps } from 'next';
import { type Data } from '~/types';

import Awards from '~/components/awards/awards';
import Outputs from '~/components/outputs/outputs';

export default function AwardsAndOutputsPage({
  data
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { documents } = data as Data;
  return (
    <>
      <Head>
        <title>Awards and Outputs | NIHR Funding and Awards</title>
        <meta name="description" content="" />
      </Head>
      <div className="container">
        <h2>Awards</h2>
        <Awards awards={documents} />
        <Outputs />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://fundingawards.nihr.ac.uk/api/latest/6');
  const data = (await response.json()) as Data;

  return {
    props: {
      data
    }
  };
};
