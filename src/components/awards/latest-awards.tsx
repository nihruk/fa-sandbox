import React from 'react';
import { type Award } from '~/types';
import Awards from '~/components/awards/awards';

function LatestAwards(props: { latestAwards: Award[] }) {
  const { latestAwards } = props;
  return (
    <div className="container">
      <h2>Latest Awards</h2>
      <Awards awards={latestAwards} />
    </div>
  );
}

export default LatestAwards;
