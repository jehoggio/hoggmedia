import Layout from '@/components/Layout'
import Post from '@/components/Post'
import CategoryList from '@/components/CategoryList'
import { getPosts } from '@/lib/posts'

export default function Blog({ posts, categories }) {
  return (
    <Layout title='Blog'>
      <h1 className='text-5xl border-b-4 p-5 font-bold mb-8 '>Blog</h1>
      <div className='flex justify-between flex-col md:flex-row'>
        <div className='md:w-3/4 md:mr-10'>
          <div className='grid lg:grid-cols-2  gap-4'>
            {posts.map((post, i) => (
              <Post key={i} post={post} />
            ))}
          </div>
        </div>

        <div className='invisible md:visible md:w-1/4'>
          <CategoryList categories={categories} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = getPosts()

  // Get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.category)
  const uniqueCategories = [...new Set(categories)]

  return {
    props: {
      posts,
      categories: uniqueCategories,
    },
  }
}
