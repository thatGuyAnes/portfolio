import React from 'react';
import RootLayout from './src/components/RootLayout';
// import './src/styles/normalize.css';
// import './src/styles/locomotive-scroll.css';
// import './src/styles/global.scss';
import './src/styles/main.scss';

export const onInitialClientRender = () => {
  // console.log("ReactDOM.render has executed")
}


export const wrapRootElement = ({element}) => {
  return (
    <RootLayout>{element}</RootLayout>
  )
};
