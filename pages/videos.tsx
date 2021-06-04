import React from 'react';
import Head from 'next/head';
import VideosList from '../components/VideosList';
import VideoPlayer from '../components/VideoPlayer';
import { YOUTUBE_ALL_VIDEOS_API } from '../constants/videoConstants';

export async function getServerSideProps() {
  const res = await fetch(
    `${YOUTUBE_ALL_VIDEOS_API}&key=${process.env.YOUTUBE_API_KEY}`
  );
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data },
  };
}

export default function Videos({ data }: any) {
  return (
    <div>
      <Head>
        <title>Videos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <VideoPlayer />
        <VideosList data={data} />
      </main>
    </div>
  );
}
