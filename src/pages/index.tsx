import styles from './index.module.css';
import { type NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import LatestAwards from '~/components/latest-awards';
import SearchBar from '~/components/search-bar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NIHR Funding and Awards</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBar />
      <h1>Home</h1>
      <LatestAwards />
    </>
  );
};

export default Home;
