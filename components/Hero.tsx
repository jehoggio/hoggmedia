import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='max-w-7xl mx-auto text-center shadow-2xl p-6 rounded-2xl'>
      <div className='px-4'>
        <div className='w-full bg-gray-900 p-2 rounded-lg'>
          <Image
            src='/images/hoggbanner2.png'
            alt='banner'
            width={1184}
            height={155}
          />
        </div>

        <p className='text-gray-300 mt-3 max-w-md mx-auto text-lg sm:text-xl md:mt-5 md:max-w-3xl'>
          Web Development, Tech and Video Production
        </p>
        <div className='mt-8 sm:flex sm:justify-center sm:flex-shrink'>
          <div className='mt-3 rounded-md shadow-lg  sm:mt-0 sm:ml-3'>
            <Link href='/blog'>
              <a className='bg-gray-900 text-gray-300 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#151B26] bg-white hover:bg-gray-300 md:py-4 md:text-lg md:px-10'>
                Blog
              </a>
            </Link>
          </div>
          <div className='mt-3 rounded-md shadow-lg sm:mt-0 sm:ml-3'>
            <Link href='/videos'>
              <a className='bg-gray-900 text-gray-300 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#151B26] bg-white hover:bg-gray-300 md:py-4 md:text-lg md:px-10'>
                Videos
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
