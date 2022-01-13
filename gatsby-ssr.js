import React from 'react';
import Loader from './src/components/Loader';
// import Cursor from './src/components/Cursor';

export const onRenderBody = ({
  setPreBodyComponents,
  setBodyAttributes,
  setHeadComponents,
  setPostBodyComponents
}) => {
  // adds the loader element.
  setPreBodyComponents([
   // <div id="loader">
   //   <div className="preloader"></div>
   // </div>
    <Loader />
  ]);
  setBodyAttributes({className: 'preloader_on scroll-container'});
  setHeadComponents([<link rel="preload" href="/scripts/preloader.js" as="script" />]);
  setPostBodyComponents([
    <script src='/scripts/preloader.js' />
  ]);
};


// export {wrapRootElement} from './gatsby-browser';
