import React , { useRef, useState, useEffect } from 'react';
import  Scrollbar from 'smooth-scrollbar';

import Navbar from '../Navbar/index';
import Footer from '../Footer';
import Cursor from '../Cursor';

import './style.scss';

const Layout = ({children}) => {
  const [bodyScrollBar, setBodyScrollBar] = useState();

  const layoutRef = useRef();
  useEffect(() => {
    setBodyScrollBar(Scrollbar.init(layoutRef.current));
  }, []);

  return (
    <>
      <div className="layout" ref={layoutRef}>
        <Navbar />
        {children}
        <Footer />
      </div>
      <Cursor />
    </>
  )

};

export default Layout;
