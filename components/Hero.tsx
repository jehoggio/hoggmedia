import Image from 'next/image'
import Link from 'next/link'
import MailingList from './MailingList'

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
        <div className='my-5 space-x-2 max-w-md mx-auto sm:flex sm:justify-center md:mt-8'>
          <Link href='/blog'>
            <a className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'>
              Blog
            </a>
          </Link>
          <Link href='/videos'>
            <a className='inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'>
              Videos
            </a>
          </Link>
        </div>
        <div className='w-full border-t border-gray-300' />
        <MailingList />
      </div>
      <Image
        className='object-cover z-0 rounded-2xl '
        src='/images/sfcity.jpg'
        width={1000}
        height={1500}
        alt=''
      />
    </div>
  )
}

export default Hero
