import React from 'react';
import Link from 'next/link';

import { type InferGetStaticPropsType, type GetStaticProps } from 'next';
import { type Data } from '~/types';

export default function Posts({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { documents } = posts as Data;

  return (
    <div className="container">
      {documents.map(award => (
        <li key={award.id}>
          <Link href={`/awards-and-outputs/awards/${award.id}`}>{award.award_title}</Link>
        </li>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://fundingawards.nihr.ac.uk/api/latest/6');
  const posts = (await response.json()) as Data;

  return {
    props: {
      posts
    }
  };
};
