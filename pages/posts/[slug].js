import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Container from '../../components/container';
import PostBody from '../../components/PostBody';
import MoreStories from '../../components/MorePosts';
import Header from '../../components/BlogHeader';
import PostHeader from '../../components/PostHeader';
import SectionSeparator from '../../components/SectionSeparator';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import PostTitle from '../../components/PostTitle';
import Head from 'next/head';
import markdownToHtml from '../../lib/markdownToHtml';

export default function Post({ post, morePosts, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{post.title}</title>
                <meta
                  property="og:image"
                  content={post.metadata.cover_image.imgix_url}
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.metadata.cover_image}
                date={post.created_at}
                author={post.metadata.author}
              />
              <PostBody content={post.content} />
            </article>
            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </div>
  );
}

export async function getStaticProps({ params, preview = null }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  const content = await markdownToHtml(data.post?.metadata?.content || '');

  return {
    props: {
      preview,
      post: {
        ...data.post,
        content,
      },
      morePosts: data.morePosts || [],
    },
  };
}

export async function getStaticPaths() {
  const allPosts = (await getAllPostsWithSlug()) || [];
  return {
    paths: allPosts.map(post => `/posts/${post.slug}`),
    fallback: true,
  };
}
