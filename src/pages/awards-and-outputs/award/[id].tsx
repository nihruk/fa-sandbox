import { type NextPage } from 'next';

import SearchBar from '~/components/search-bar';

const AwardDetails: NextPage = () => {
  return (
    <>
      <SearchBar />
      <h3>Award Details</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto illo voluptatibus iure modi
        consequatur consectetur laudantium autem molestiae assumenda. Obcaecati beatae assumenda
        accusantium dignissimos ea voluptatum asperiores quod quas dolore?
      </p>
    </>
  );
};

export default AwardDetails;
