import Image from 'next/image'

export default function ContactForm() {
  return (
    <div className='relative max-w-7xl mx-auto lg:grid lg:grid-cols-5 shadow-2xl p-6 rounded-2xl'>
      <div className='px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12'>
        <div className='max-w-lg mx-auto'>
          <h2 className='text-2xl font-bold sm:text-3xl'>Let's connect</h2>
          <dl className='mt-8 text-base'>
            <div>
              <Image
                className='rounded-lg shadow-lg'
                src='/images/me.jpg'
                alt='me'
                height={200}
                width={200}
              />
            </div>
            <div className='mt-6'>
              <dt className='sr-only'>LinkedIn</dt>
              <dd className='flex'>
                <a
                  href='https://www.linkedin.com/in/jeffhogg/'
                  target='_blank'
                  rel='noreferrer'
                  className='text-gray-400 hover:text-gray-500'
                >
                  <span className='sr-only'>LinkedIn</span>
                  <svg
                    className='w-6 h-6 transition duration-140 transform hover:scale-110'
                    aria-hidden='true'
                    fill='#0077B5'
                    viewBox='0 0 20 20'
                  >
                    <path
                      fillRule='evenodd'
                      d='M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
                <a
                  href='https://www.linkedin.com/in/jeffhogg/'
                  target='_blank'
                  rel='noreferrer'
                  className='ml-3'
                >
                  Jeff Hogg
                </a>
              </dd>
            </div>
            <div className='mt-3'>
              <dt className='sr-only'>Twitter</dt>
              <dd className='flex'>
                <a
                  href='https://twitter.com/Hogg_Media'
                  target='_blank'
                  rel='noreferrer'
                  className='text-gray-400 hover:text-gray-500'
                >
                  <span className='sr-only'>Twitter</span>
                  <svg
                    className='w-6 h-6 transition duration-140 transform hover:scale-110'
                    aria-hidden='true'
                    fill='#00acee'
                    viewBox='0 0 25 25'
                  >
                    <path
                      fillRule='evenodd'
                      d='M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
                <a
                  href='https://twitter.com/Hogg_Media'
                  target='_blank'
                  rel='noreferrer'
                  className='ml-3'
                >
                  @Hogg_Media
                </a>
              </dd>
            </div>
            <div className='mt-3'>
              <dt className='sr-only'>YouTube</dt>
              <dd className='flex'>
                <a
                  href='https://twitter.com/Hogg_Media'
                  target='_blank'
                  rel='noreferrer'
                  className='transition duration-140 transform hover:scale-110'
                >
                  <span className='sr-only'>YouTube</span>
                  <Image
                    src='/images/youtube.png'
                    alt='YoutTube logo'
                    height={22}
                    width={32}
                  />
                </a>
                <a
                  href='https://www.youtube.com/c/HoggMedia'
                  target='_blank'
                  rel='noreferrer'
                  className='ml-3'
                >
                  Hogg Media
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className='px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12'>
        <div className='max-w-lg mx-auto lg:max-w-none'>
          <form action='#' method='POST' className='grid grid-cols-1 gap-y-6'>
            <div>
              <label htmlFor='full_name' className='sr-only'>
                Full name
              </label>
              <input
                type='text'
                name='full_name'
                id='full_name'
                autoComplete='name'
                className='block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                placeholder='Full name'
              />
            </div>
            <div>
              <label htmlFor='email' className='sr-only'>
                Email
              </label>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                className='block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                placeholder='Email'
              />
            </div>
            <div>
              <label htmlFor='phone' className='sr-only'>
                Phone
              </label>
              <input
                type='text'
                name='phone'
                id='phone'
                autoComplete='tel'
                className='block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md'
                placeholder='Phone'
              />
            </div>
            <div>
              <label htmlFor='message' className='sr-only'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                rows={4}
                className='block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md'
                placeholder='Message'
                defaultValue={''}
              />
            </div>
            <div>
              <button
                type='submit'
                className='inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
