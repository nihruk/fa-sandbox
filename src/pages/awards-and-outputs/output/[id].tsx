import { type NextPage } from 'next';
import Head from 'next/head';

import SearchBar from '~/components/search-bar';

const OutputDetails: NextPage = () => {
  return (
    <>
      <Head>
        <title>Output tile | NIHR Funding and Awards</title>
        <meta name="description" content="Output Summary" />
      </Head>
      <SearchBar />
      <div className="container">
        <h1>Output Details</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto illo voluptatibus iure modi
          consequatur consectetur laudantium autem molestiae assumenda. Obcaecati beatae assumenda
          accusantium dignissimos ea voluptatum asperiores quod quas dolore?
        </p>
      </div>
    </>
  );
};

export default OutputDetails;
