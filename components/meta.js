import Head from 'next/head';

export default function Meta({ title = 'Hogg Media' }) {
  return (
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
        content="https://www.hoggmedia.com/images/hoggmediass.png"
      />
    </Head>
  );
}
