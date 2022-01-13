import React from 'react';
import RootLayout from './src/components/RootLayout';
import './src/styles/normalize.css';
import './src/styles/global.scss';
import './src/styles/loader.scss';
import './src/styles/locomotive-scroll.css';
// import Cursor from './static/scripts/cursor';

export const onInitialClientRender = () => {
  console.log("ReactDOM.render has executed")
  // initialize custom cursor
  // const cursor = new Cursor(document.querySelector('.cursor'));
}


export const wrapRootElement = ({element}) => {
  return (
    <RootLayout>{element}</RootLayout>
  )
};
