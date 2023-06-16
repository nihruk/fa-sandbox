import { type NextPage } from 'next';

import SearchBar from '~/components/search-bar';

const OutputDetails: NextPage = () => {
  return (
    <>
      <SearchBar />
      <h1>Output Details</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto illo voluptatibus iure modi
        consequatur consectetur laudantium autem molestiae assumenda. Obcaecati beatae assumenda
        accusantium dignissimos ea voluptatum asperiores quod quas dolore?
      </p>
    </>
  );
};

export default OutputDetails;
