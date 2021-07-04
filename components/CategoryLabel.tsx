import Link from 'next/link'

const CategoryLabel = ({ children }) => {
  return (
    <div className={`px-2 py-1 bg-gray-500 text-gray-100 font-bold rounded`}>
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  )
}

export default CategoryLabel
