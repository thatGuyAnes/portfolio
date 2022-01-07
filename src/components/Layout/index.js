import React from 'react';
import Navbar from '../Navbar/index';
import Footer from '../Footer';
import Cursor from '../Cursor';

import './style.scss';

const Layout = ({children}) => {


  return (
    <>
      <div className="layout">
        <Navbar />

        {children}

        <Footer />
      </div>
      <Cursor />
    </>
  )

};

export default Layout;
