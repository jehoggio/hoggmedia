import Layout from '@/components/Layout'
import ProjectList from '@/components/ProjectList'

export default function Portfolio() {
  return (
    <Layout title='Portfolio'>
      <h1 className='text-5xl border-b-4 border-gray-300 p-5 font-bold mb-8 '>
        Portfolio
      </h1>
      <ProjectList />
    </Layout>
  )
}
