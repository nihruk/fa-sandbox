import React from 'react';
import Head from 'next/head';

import { type NextPage } from 'next';
import { type InferGetStaticPropsType, type GetStaticProps } from 'next';
import { type Data } from '~/types';

import Awards from '~/components/awards/awards';

const HomePage: NextPage = ({ data }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { documents } = data as Data;
  return (
    <>
      <Head>
        <title>NIHR Funding and Awards</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Latest Awards</h2>
      <Awards awards={documents} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://fundingawards.nihr.ac.uk/api/latest/6');
  const data = (await response.json()) as Data;

  //console.log(posts);

  return {
    props: {
      data
    }
  };
};

export default HomePage;
