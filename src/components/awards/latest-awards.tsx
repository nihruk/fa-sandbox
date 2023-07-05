import React from 'react';
import Link from 'next/link';

import { type Award } from '~/types';

export default function LatestAwards(props: { awards: Award[] }) {
  const { awards } = props;
  return (
    <div className="container">
      <h2>Latest Awards</h2>
      <>
        {awards.map(award => (
          <div className="row" key={award.id}>
            <div className="col-7">
              <h3>
                <Link href={`/awards-and-outputs/awards/${award.id}`}>{award.award_title}</Link>
              </h3>
              <p>{award.award_type} Award</p>
              <p>
                Start Date: <strong>{award.start_date}</strong>
              </p>
            </div>
            <div className="col-5">
              <p>
                Contracting Organisation: <strong>{award.contracting_org}</strong>
              </p>
              <p>
                Chief Investigator: <strong>{award.lead_investigator_name}</strong>
              </p>
            </div>
          </div>
        ))}
      </>
    </div>
  );
}
