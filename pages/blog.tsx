import Head from 'next/head';

export default function Blog() {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <p className="mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
          Blog
        </p>
        <p className="max-w-xl mt-5 mx-auto text-xl ">Coming soon</p>
      </div>
    </div>
  );
}
