import React from 'react';
import Head from 'next/head';

import { type NextPage } from 'next';
import { type InferGetStaticPropsType, type GetStaticProps, type GetStaticPaths } from 'next';
import { type Award, type Data } from '~/types';

const AwardDetailsPage: NextPage = ({ award }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { award_title } = award as Award;

  return (
    <>
      <Head>
        <title>{award_title} | NIHR Funding and Awards</title>
        <meta name="description" content="Award Summary" />
      </Head>
      <div className="container">
        <h3>{award_title}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto illo voluptatibus iure modi
          consequatur consectetur laudantium autem molestiae assumenda. Obcaecati beatae assumenda
          accusantium dignissimos ea voluptatum asperiores quod quas dolore?
        </p>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async context => {
  const { params } = context;
  const awardId = params?.awardId as string;

  const response = await fetch(`https://fundingawards.nihr.ac.uk/api/project?id=${awardId}`);
  const award = (await response.json()) as Award;

  return {
    props: {
      award
    }
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://fundingawards.nihr.ac.uk/api/latest/6');
  const posts = (await response.json()) as Data;

  const paths = posts.documents.map(award => ({
    params: { awardId: award.id }
  }));

  return { paths, fallback: 'blocking' };
};

export default AwardDetailsPage;
