import React from "react";
import Link from "next/link";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { type Award } from "~/types";
import { convertAwardData } from "~/utils/award-util";

export default function LatestAwards(props: { awards: Award[] }) {
  const { awards } = props;

  return (
    <div className="latest-awards-component">
      {awards.map((award) => (
        <Row key={award.id}>
          <Col lg="8">
            <h3>
              <Link href={`/awards-and-outputs/awards/${award.id}`}>
                {award.award_title}
              </Link>
            </h3>
            <p>{award.award_type} Award</p>
            {award.start_date && (
              <p>
                Start Date:<strong>{convertAwardData(award.start_date)}</strong>
              </p>
            )}
          </Col>
          <Col lg="4">
            <p>
              Contracting Organisation:
              <br /> <strong>{award.contracting_org}</strong>
            </p>
            <p>
              Chief Investigator:
              <br /> <strong>{award.lead_investigator_name}</strong>
            </p>
          </Col>
        </Row>
      ))}
    </div>
  );
}
