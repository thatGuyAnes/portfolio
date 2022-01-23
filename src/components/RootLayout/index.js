import React, {useRef} from 'react';
// import {LocomotiveScrollProvider} from 'react-locomotive-scroll'
import Cursor from '../Cursor'

export default function RootLayout({children}) {
  return (
    <>
      {children}
      <Cursor />
    </>
  )

};
