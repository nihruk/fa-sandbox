import { type Data, type Award } from '~/types';

export async function getLatestAwards() {
  const response = await fetch('https://fundingawards.nihr.ac.uk/api/latest/6');
  const data = (await response.json()) as Data;

  return data;
}

export async function getAwardById(awardId: string) {
  const response = await fetch(`https://fundingawards.nihr.ac.uk/api/project?id=${awardId}`);
  const award: Award = (await response.json()) as Award;

  return award;
}
