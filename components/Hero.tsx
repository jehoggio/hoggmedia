import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='bg-white mx-auto max-w-5xl px-4 sm:mt-24 mx-auto text-center shadow-2xl p-6 mt-20 rounded-2xl'>
      <div className='text-center'>
        <Image src='/images/hogglogo.png' width={200} height={200} />

        <h1 className='mt-2 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
          Hogg Media
        </h1>
        <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
          Web development, Coding and Tech
        </p>
        <div className='mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8'>
          <div className='rounded-md shadow'>
            <Link href='/blog'>
              <a className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 md:py-4 md:text-lg md:px-10'>
                Blog
              </a>
            </Link>
          </div>
          <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
            <Link href='/videos'>
              <a className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10'>
                Videos
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>

    // <div className='max-w-7xl bg-gray-900 mx-auto text-center shadow-2xl p-6 mt-20 rounded-2xl'>
    //   <div className='w-full  p-2 rounded-lg'>
    //     <Image
    //       src='/images/hoggbanner2.png'
    //       alt='banner'
    //       width={1184}
    //       height={155}
    //     />
    //   </div>

    //   <p className='text-gray-300 mt-3 max-w-md mx-auto text-lg sm:text-xl md:mt-5 md:max-w-3xl'>
    //     Web Development, Tech and Video Production
    //   </p>
    //   <div className='mt-8 sm:flex sm:justify-center sm:flex-shrink'>
    //     <div className='mt-3 rounded-md shadow-lg  sm:mt-0 sm:ml-3'>
    //       <Link href='/blog'>
    //         <a className='text-gray-300 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md  bg-white hover:text-white hover:bg-gray-300 md:py-4 md:text-lg md:px-10'>
    //           Blog
    //         </a>
    //       </Link>
    //     </div>
    //     <div className='mt-3 rounded-md shadow-lg sm:mt-0 sm:ml-3'>
    //       <Link href='/videos'>
    //         <a className='text-gray-300 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md  bg-white hover:text-white hover:bg-gray-300 md:py-4 md:text-lg md:px-10'>
    //           Videos
    //         </a>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  )
}

export default Hero
