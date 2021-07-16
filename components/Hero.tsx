import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='lg:flex lg:flex-row bg-white mx-auto max-w-5xl text-center shadow-2xl rounded-2xl'>
      <div className='container p-6 text-center'>
        <Image src='/images/hogglogo.png' width={200} height={200} />

        <h1 className='mt-2 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
          Hogg Media
        </h1>
        <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
          Helping to advance the world through technology and data.
        </p>
        <div className='mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8'>
          <div className='rounded-md shadow'>
            <Link href='/blog'>
              <a className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-600 md:py-4 md:text-lg md:px-10'>
                Blog
              </a>
            </Link>
          </div>
          <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
            <Link href='/videos'>
              <a className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-600 bg-gray-200 hover:bg-gray-50 md:py-4 md:text-lg md:px-10'>
                Videos
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Image
        className='object-cover rounded-2xl '
        src='/images/sfcity.jpg'
        width={1000}
        height={1500}
        alt=''
      />
    </div>
  )
}

export default Hero
