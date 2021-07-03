import fs from 'fs'
import path from 'path'
import Layout from '@/components/Layout'
import Post from '@/components/Post'
import CategoryList from '@/components/CategoryList'
import matter from 'gray-matter'
import { getPosts } from '@/lib/posts'

export default function BlogCategory({ posts, categoryName, categories }) {
  // capitilize the first letter of the category name
  const categoryNameCapitalized =
    categoryName[0].toUpperCase() + categoryName.slice(1)

  return (
    <Layout title='Blog'>
      <div className='flex justify-between flex-col md:flex-row'>
        <div className='md:w-3/4 md:mr-10'>
          <h1 className='text-5xl border-b-4 p-5 font-bold mb-8 '>
            {categoryNameCapitalized}
          </h1>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
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

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const categories = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return frontmatter.category.toLowerCase()
  })

  const paths = categories.map((category) => ({
    params: { category_name: category },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { category_name } }) {
  const files = fs.readdirSync(path.join('posts'))

  const posts = getPosts()

  // Get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.category)
  const uniqueCategories = [...new Set(categories)]

  // Filters posts by category
  const filteredPosts = posts.filter(
    (post) => post.frontmatter.category.toLowerCase() === category_name
  )

  return {
    props: {
      posts: filteredPosts,
      categoryName: category_name,
      categories: uniqueCategories,
    },
  }
}