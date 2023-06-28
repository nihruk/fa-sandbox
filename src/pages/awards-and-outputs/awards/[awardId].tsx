import React from 'react';
import { type NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const AwardDetailsPage: NextPage = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

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

export default AwardDetailsPage;
