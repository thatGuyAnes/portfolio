import React from 'react';
import './style.scss';

const Loader = () => {

//   React.useLayoutEffect(() => {
//     initLoader();
//   }, []);
// 
//   const initLoader = () => {
//     setTimeout(() => {
//       document.body.classList.remove('loading');
//       setIsLoaded(true);
//     }, 2000)
//   };

  return (
    <div id="loader">
      <div className="preloader"></div>
    </div>
  )
};

export default Loader;
