import Container from '../components/container';
import MoreStories from '../components/MorePosts';
import HeroPost from '../components/HeroPost';
import BlogHeader from '../components/BlogHeader';
import { getAllPostsForHome } from '../lib/api';
import Head from 'next/head';

export default function Blog({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <BlogHeader title />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.metadata.cover_image}
            date={heroPost.created_at}
            author={heroPost.metadata.author}
            slug={heroPost.slug}
            excerpt={heroPost.metadata.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </>
  );
}

export async function getStaticProps({ preview }) {
  const allPosts = (await getAllPostsForHome(preview)) || [];
  return {
    props: { allPosts },
  };
}
