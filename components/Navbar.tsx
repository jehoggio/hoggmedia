import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import Image from 'next/image'

const navigation = [
  { name: 'Blog', href: '/blog' },
  { name: 'Videos', href: '/videos' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  return (
    <Disclosure as='nav' className='bg-white'>
      {({ open }) => (
        <>
          <div className='z-10 px-2 sm:px-6 '>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button*/}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex-shrink-0 pt-2 flex items-center cursor-pointer '>
                  <Link href='/'>
                    <a>
                      <Image
                        src='/images/hogglogo.png'
                        alt='hogglogo'
                        width={40}
                        height={40}
                      />
                    </a>
                  </Link>
                </div>
                <div className='hidden pt-4 sm:block sm:ml-6'>
                  <div className='space-x-8'>
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a className='text-gray-500 hover:bg-gray-100 rounded-md text-sm font-medium'>
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center mr-2 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                {/* Profile dropdown */}
                <Menu as='div' className='ml-3 relative'>
                  {({ open }) => (
                    <>
                      <div>
                        <Menu.Button className='text-gray-500 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white'>
                          <span className='sr-only'>Open user menu</span>
                          <Image
                            className='rounded-full'
                            src='/images/me.jpg'
                            alt='headshot'
                            width={40}
                            height={40}
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        show={open}
                        as={Fragment}
                        enter='transition ease-out duration-100'
                        enterFrom='transform opacity-0 scale-95'
                        enterTo='transform opacity-100 scale-100'
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                      >
                        <Menu.Items
                          static
                          className='origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                        >
                          <Menu.Item>
                            {() => (
                              <a
                                href='https://www.linkedin.com/in/jeffhogg/'
                                target='_blank'
                                rel='noreferrer'
                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                              >
                                LinkedIn
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {() => (
                              <a
                                href='https://github.com/jeffhogg86'
                                target='_blank'
                                rel='noreferrer'
                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                              >
                                Github
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {() => (
                              <a
                                href='https://twitter.com/Hogg_Media'
                                target='_blank'
                                rel='noreferrer'
                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                              >
                                Twitter
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {() => (
                              <a
                                href='https://www.youtube.com/channel/UCSTOp5FPjNXBmop3o47yZaQ'
                                target='_blank'
                                rel='noreferrer'
                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                              >
                                YouTube
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </>
                  )}
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <a className='text-gray-500 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium'>
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
