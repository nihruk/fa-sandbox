import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@nihruk/design-system@latest/dist/design-system.bundle.css"
        />
        <script
          src="https://unpkg.com/@nihruk/design-system@latest/dist/design-system.bundle.js"
          async
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
