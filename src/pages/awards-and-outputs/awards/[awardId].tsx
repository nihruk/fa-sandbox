import React from 'react';
import Head from 'next/head';

import { type InferGetStaticPropsType, type GetStaticProps, type GetStaticPaths } from 'next';
import { type Award } from '~/types';

import { getLatestAwards, getAwardById } from '~/utils/award-util';

export default function AwardDetailsPage({
  award
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const awardObject = Object.entries(award).map(([key, value]) => {
    return (
      <div key={key}>
        <strong>{key} :</strong> {value.toString()}
      </div>
    );
  });

  return (
    <>
      <Head>
        <title>{award.award_title} | NIHR Funding and Awards</title>
        <meta name="description" content="description" />
      </Head>
      <div className="container">
        <h3>{award.award_title}</h3>

        {awardObject}
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps<{ award: Award }> = async context => {
  const { params } = context;
  const awardId = params?.awardId as string;

  const award = await getAwardById(awardId);

  return {
    props: {
      award
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getLatestAwards();

  const paths = data.documents.map(award => ({
    params: { awardId: award.id }
  }));

  return { paths, fallback: 'blocking' };
};
