import React from 'react';
// import Cursor from './src/components/Cursor';

export const onRenderBody = ({
  setPreBodyComponents,
  setBodyAttributes,
  setHeadComponents,
  setPostBodyComponents
}) => {
  // adds Loader componenet to body.
  setPreBodyComponents([
    <div id="loader">
      <div className="preloader"></div>
    </div>

  ]);
 // add class to body.
  setBodyAttributes({className: 'preloader_on scroll-container'});
  // setHeadComponents([<link rel="preload" href="/scripts/preloader.js" as="script" />]);
  // setPostBodyComponents([<Cursor />, <script src='/scripts/preloader.js' />]);
  setPostBodyComponents([
    <script src='/scripts/preloader.js' />
  ]);
};


// export {wrapRootElement} from './gatsby-browser';
