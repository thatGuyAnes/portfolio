import React, {useRef, useState, useEffect} from 'react';
// import LocomotiveScroll from 'locomotive-scroll';
import {LocomotiveScrollProvider} from 'react-locomotive-scroll'

// import  Scrollbar from 'smooth-scrollbar';

import Navbar from '../Navbar/index';
import Footer from '../Footer';
import Cursor from '../Cursor';

import './style.scss';

const Layout = ({children}) => {

  return (
    <>
      <Navbar />
      <div className="layout">
        {children}
        <Footer />
      </div>
    </>
  )

};

export default Layout;
