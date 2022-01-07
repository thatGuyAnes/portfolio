import React from 'react';
import Cursor from '../Cursor'

const RootLayout = ({children}) => {
  return (
    <>
      {children}
      <Cursor />
    </>
  )
};

export default RootLayout;
