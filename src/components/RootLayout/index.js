import React, {useRef} from 'react';
import {LocomotiveScrollProvider} from 'react-locomotive-scroll'
import Cursor from '../Cursor'



export default function RootLayout({children}) {

  const containerRef = useRef(null)

  return (
    <LocomotiveScrollProvider
      options={
        {
          smooth: true,
        }
      }
      watch={[]}
      containerRef={containerRef}
    >
      <main
        data-scroll-container
        ref={containerRef}
        className="main-container"
      >
        {children}
      </main>
      <Cursor />
    </LocomotiveScrollProvider>
  )

};
