import { type AppType } from 'next/dist/shared/lib/utils';
import Head from 'next/head';
import Layout from '~/components/layout';
import '~/styles/globals.css';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <title>NIHR Funding and Awards</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@nihruk/design-system@latest/dist/design-system.bundle.css"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
