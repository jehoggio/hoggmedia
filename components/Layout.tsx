import React, { ReactNode } from 'react'
import Meta from './Meta'
import Navbar from './Navbar'
import Footer from './Footer'

type Props = {
  children?: ReactNode
  title?: string
  description?: string
}

const Layout = ({ children, title, description }: Props) => (
  <div>
    <Meta title={title} description={description} />
    <Navbar />
    <main className='container mx-auto my-7'>{children}</main>
    <Footer />
  </div>
)

export default Layout
