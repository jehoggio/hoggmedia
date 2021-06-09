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
        content="Coding, Tech and Video production."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://hoggmedia.com/" />
      <meta
        property="og:image"
        content="https://www.hoggmedia.com/images/hogglogo.png"
      />
    </Head>
    <Navbar />
    {children}
  </div>
);

export default Layout;
