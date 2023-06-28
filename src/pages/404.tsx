import React from 'react';
import { type NextPage } from 'next';
import Head from 'next/head';

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>404 Not Found - NIHR Funding and Awards</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <h1>404 Not Found</h1>
      </div>
    </>
  );
};

export default NotFoundPage;
