import React, {useRef, useState, useEffect} from 'react';
// import LocomotiveScroll from 'locomotive-scroll';
import {LocomotiveScrollProvider} from 'react-locomotive-scroll'

// import  Scrollbar from 'smooth-scrollbar';

import Navbar from '../Navbar/index';
import Footer from '../Footer';
import Cursor from '../Cursor';

import './style.scss';

const Layout = ({children}) => {

  const layoutRef = useRef();

  // useEffect(() => {
  //   const lscroll = new LocomotiveScroll({
  //     el: layoutRef.current,
  //     smooth: true
  //   });
  //   lscroll.on('scroll', () => {
  //     console.log('scrolling');
  //   })
  // }, []);




  return (
    <>
      <Navbar />
      <LocomotiveScrollProvider
        options={
          {
            smooth: true,
          }
        }
        watch={[]}
        layoutRef={layoutRef}
      >
        <div className="layout" data-scroll-container ref={layoutRef}>
          {children}
          <Footer />
        </div>
      </LocomotiveScrollProvider>
      <Cursor />
    </>
  )

};

export default Layout;
