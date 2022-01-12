import React, {useRef, useState, useEffect} from 'react';
import LocomotiveScroll from 'locomotive-scroll';

// import  Scrollbar from 'smooth-scrollbar';

import Navbar from '../Navbar/index';
import Footer from '../Footer';
import Cursor from '../Cursor';

import './style.scss';

const Layout = ({children}) => {
  // const [bodyScrollBar, setBodyScrollBar] = useState();
  // const layoutRef = useRef();
  // useEffect(() => {
  //   setBodyScrollBar(Scrollbar.init(layoutRef.current));
  // }, []);

  const layoutRef = useRef();

  useEffect(() => {
    const lscroll = new LocomotiveScroll({
      el: layoutRef.current,
      smooth: true
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="layout" ref={layoutRef}>
        {children}
        <Footer />
      </div>
      <Cursor />
    </>
  )

};

export default Layout;
