import React from 'react';
import Link from 'next/link';

const awards = [
  { id: 1, title: 'Award name 1' },
  { id: 2, title: 'Award name 2' },
  { id: 3, title: 'Award name 3' },
  { id: 4, title: 'Award name 4' },
  { id: 5, title: 'Award name 5' }
];

function Awards() {
  return (
    <div className="container">
      <h3>Awards</h3>
      {awards.map(award => (
        <li key={award.id}>
          <Link href={`/awards-and-outputs/awards/${award.id}`}>{award.title}</Link>
        </li>
      ))}
    </div>
  );
}

export default Awards;
