import Link from 'next/link'
import Image from 'next/image'
import CategoryLabel from './CategoryLabel'

const Post = ({ post }) => {
  const { frontmatter, slug } = post

  return (
    <div className='w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6'>
      <Link href={`/blog/${slug}`}>
        <Image
          src={frontmatter.cover_image}
          alt=''
          height={420}
          width={600}
          className='mb-4 rounded cursor-pointer'
        />
      </Link>
      <div className='flex justify-between tems-center'>
        <span className='font-light text-gray-600'>{frontmatter.date}</span>
        <CategoryLabel>{frontmatter.category}</CategoryLabel>
      </div>

      <div className='mt-2'>
        <Link href={`/blog/${slug}`}>
          <a className='text-2xl text-gray-700 font-bold hover:underline hover:text-blue-600'>
            {frontmatter.title}
          </a>
        </Link>
        <p className='mt-2 text-gray-600'>{frontmatter.excerpt}</p>
      </div>

      <div className='flex justify-between items-center mt-6'>
        <Link href={`/blog/${slug}`}>
          <a className='text-gray-900 hover:text-blue-600'>Read More</a>
        </Link>

        <div className='flex items-center'>
          <Link href='/contact'>
            <a className='transition duration-140 transform hover:scale-110'>
              <Image
                src={frontmatter.author_image}
                alt=''
                className='mx-4 w-10 h-10 object-cover cursor-pointer rounded-full'
                width={40}
                height={40}
              />
            </a>
          </Link>
          <Link href='/contact'>
            <h3 className='text-gray-700 ml-2 font-bold cursor-pointer hover:text-blue-600'>
              {frontmatter.author}
            </h3>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Post
