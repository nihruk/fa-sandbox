import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/@nihruk/design-system@latest/dist/design-system.bundle.css"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
        <Script src="https://unpkg.com/@nihruk/design-system@latest/dist/design-system.bundle.js"></Script>
      </body>
    </Html>
  );
}
