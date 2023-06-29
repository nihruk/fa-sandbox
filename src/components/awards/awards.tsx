import React from 'react';
import Link from 'next/link';
import { type Award } from '~/types';

function Awards(props: { awards: Award[] }) {
  const { awards } = props;

  return (
    <>
      {awards.map(award => (
        <li key={award.id}>
          <Link href={`/awards-and-outputs/awards/${award.id}`}>{award.award_title}</Link>
        </li>
      ))}
    </>
  );
}

export default Awards;
