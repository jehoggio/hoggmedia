import React, { ReactNode } from 'react';
import Meta from './meta';
import Navbar from './Navbar';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children }: Props) => (
  <div>
    <Meta />
    <Navbar />
    {children}
  </div>
);

export default Layout;
