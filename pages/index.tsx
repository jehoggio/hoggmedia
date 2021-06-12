import Head from 'next/head';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hogg Media</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Hogg Media" />
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
      <Hero />
    </div>
  );
}
