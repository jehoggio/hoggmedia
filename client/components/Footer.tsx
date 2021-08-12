/* This example requires Tailwind CSS v2.0+ */
const navigation = {
  main: [
    { name: 'Blog', href: '/blog' },
    { name: 'Videos', href: '/videos' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jeffhogg/',
      icon: () => (
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
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/jeffhogg86',
      icon: () => (
        <svg
          fill='#000'
          aria-hidden='true'
          className='w-6 h-6 transition duration-140 transform hover:scale-110'
          viewBox='0 0 24 24'
        >
          <path
            fillRule='evenodd'
            d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/JeffeHogg',
      icon: () => (
        <svg
          className='w-6 h-6 transition duration-140 transform hover:scale-110'
          aria-hidden='true'
          fill='#00acee'
          viewBox='0 0 24 24'
        >
          <path
            fillRule='evenodd'
            d='M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z'
            clipRule='evenodd'
          />
        </svg>
      ),
    },

    {
      name: 'YouTube',
      href: 'https://www.youtube.com/c/HoggMedia',
      icon: () => (
        <img
          className='transition duration-140 transform hover:scale-110'
          src='/images/assets/youtube.png'
          alt='YoutTube logo'
          height={32}
          width={32}
        />
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className='bg-white'>
      <div className='max-w-7xl mx-auto py-8 px-4 overflow-hidden sm:px-6 lg:px-8'>
        <nav
          className='-mx-5 -my-2 flex flex-wrap justify-center'
          aria-label='Footer'
        >
          {navigation.main.map((item) => (
            <div key={item.name} className='px-5 py-2'>
              <a
                href={item.href}
                className='text-base text-gray-500 hover:text-gray-900'
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className='mt-8 flex justify-center space-x-6'>
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target='_blank'
              rel='noreferrer'
              className='text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>{item.name}</span>
              <item.icon aria-hidden='true' />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
