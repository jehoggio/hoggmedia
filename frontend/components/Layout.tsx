import React, { ReactNode } from 'react'
import Meta from './Meta'
import Alert from './alert'
import Navbar from './Navbar'
import Footer from './Footer'

type Props = {
  children?: ReactNode
  title?: string
  description?: string
  preview?: boolean
}

const Layout = ({ preview, children, title, description }: Props) => (
  <div>
    <Meta title={title} description={description} />
    <Navbar />
    <Alert preview={preview} />
    <main className='container mx-auto my-7'>{children}</main>
    <Footer />
  </div>
)

export default Layout
