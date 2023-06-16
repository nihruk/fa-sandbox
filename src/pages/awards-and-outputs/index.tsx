import { type NextPage } from 'next';

import Awards from '~/components/awards';
import Outputs from '~/components/outputs';
import SearchBar from '~/components/search-bar';

const AwardsAndOutputs: NextPage = () => {
  return (
    <>
      <SearchBar />
      <h1>Awards and Outputs</h1>
      <Awards />
      <Outputs />
    </>
  );
};

export default AwardsAndOutputs;
