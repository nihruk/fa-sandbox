import { type NextPage } from 'next';
import Head from 'next/head';


const AwardDetails: NextPage = () => {
  return (
    <>
      <Head>
        <title>Award title | NIHR Funding and Awards</title>
        <meta name="description" content="Award Summary" />
      </Head>
      <div className="container">
        <h3>Award Details</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto illo voluptatibus iure modi
          consequatur consectetur laudantium autem molestiae assumenda. Obcaecati beatae assumenda
          accusantium dignissimos ea voluptatum asperiores quod quas dolore?
        </p>
      </div>
    </>
  );
};

export default AwardDetails;
