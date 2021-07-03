import React, { ReactNode } from 'react'
import Meta from './Meta'
import Navbar from './Navbar'

type Props = {
  children?: ReactNode
  title?: string
  description?: string
  type?: string
  date?: string
}

const Layout = ({ children, title, description, type, date }: Props) => (
  <div>
    <Meta title={title} description={description} type={type} date={date} />
    <Navbar />
    <main className='container mx-auto my-7'>{children}</main>
  </div>
)

export default Layout
