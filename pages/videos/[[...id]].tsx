import React from 'react'
import Layout from '../../components/Layout'
import VideoList from '../../components/VideoList'
import VideoPlayer from '../../components/VideoPlayer'
import { YOUTUBE_ALL_VIDEOS_API } from '../../lib/videoConstants'

export async function getServerSideProps() {
  const res = await fetch(
    `${YOUTUBE_ALL_VIDEOS_API}&key=${process.env.YOUTUBE_API_KEY}`
  )
  const data = await res.json()
  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: { data },
  }
}

export default function Videos({ data }: any) {
  return (
    <Layout title='Videos'>
      <main>
        <h1 className='text-5xl border-b-4 p-5 font-bold'>Videos</h1>
        <VideoPlayer />
        <VideoList data={data} />
      </main>
    </Layout>
  )
}
