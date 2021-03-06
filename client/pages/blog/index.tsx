import Container from '@/components/blog/container'
import MorePosts from '@/components/blog/more-posts'
import HeroPost from '@/components/blog/hero-post'
import Intro from '@/components/blog/intro'
import Layout from '@/components/Layout'
import { getAllPostsForHome } from '@/lib/api'

export default function Blog({ allPosts, preview }) {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout title='Blog' preview={preview}>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MorePosts posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps({ preview = null }) {
  const allPosts = (await getAllPostsForHome(preview)) || []
  return {
    props: { allPosts, preview },
  }
}
