import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Hogg Media' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="Learn how to code at CodeTech TV with coding videos and tutorials. Check out the best tech gear to get started recording YouTube videos."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://codetechtv.com/" />
      <meta
        property="og:image"
        content="https://codetechtv.com/images/codetechtv.png"
      />
      <script
        data-ad-client="ca-pub-6338076895094129"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>
    </Head>
    <Navbar />
  </div>
);

export default Layout;
