import React, {useRef} from 'react';
import {LocomotiveScrollProvider} from 'react-locomotive-scroll'
import Navbar from '../Navbar/index';
import Footer from '../Footer';

import './style.scss';

const Layout = ({children}) => {

  const containerRef = useRef(null);

  const initEvents = () => {
    const cursor = document.querySelector('.cursor');
    const circle = cursor.querySelector('circle');
    const onMouseOver = (event) => {
      console.log(event.target)
      if (event.target.classList.contains('hoverable')) {
        cursor.classList.toggle('-expand');
        // circle.setAttribute('r', '30')
      }
    };
    const onMouseLeave = (event) => {
      if (event.target.classList.contains('hoverable')) {
        cursor.classList.toggle('-expand');
        // circle.setAttribute('r', '20')
      }
    };
    containerRef.current.addEventListener('mouseover', onMouseOver)
    containerRef.current.addEventListener('mouseout', onMouseLeave)

  };


  React.useEffect(() => {
    initEvents();
  }, []);

  return (
    <LocomotiveScrollProvider
      options={
        {
          smooth: true,
          smoothMobile: false,
          getDirection: true,
          // touchMultiplier: 2.5,
        }
      }
      watch={[]}
      containerRef={containerRef}
    >
      <div className="layout"
        data-scroll-container
        ref={containerRef}
        id="scroll-container"
      >
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </LocomotiveScrollProvider>
  )

};

export default Layout;
