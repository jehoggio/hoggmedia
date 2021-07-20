import Image from 'next/image'
import Link from 'next/link'
import MailingList from './MailingList'

const Hero = () => {
  return (
    <div className='overflow-hidden lg:flex lg:flex-row bg-white mx-auto max-w-5xl text-center shadow-2xl rounded-2xl'>
      <div className='container p-6 text-center'>
        <Image src='/images/assets/hogglogo.png' width={200} height={200} />
        <h1 className='mt-2 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
          Hogg Media
        </h1>
        <p className='mt-4 mb-8 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:text-xl md:max-w-3xl'>
          Helping to advance the world through technology and data.
        </p>
        <div className='w-full border-t border-gray-300' />
        <MailingList />
      </div>
      <Image
        src='/images/assets/sfcity.jpg'
        width={1000}
        height={1500}
        alt=''
      />
    </div>
  )
}

export default Hero
