import { Html, Head, Main, NextScript } from "next/document";

// document is one type of html
// akane amra third party script add korte pari
// akane amra google font cdn add korte pri
//

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        /> */}
      </Head>

      <body className="antialiased">
        <div id="parent-div">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}
