import React from 'react';

export const onRenderBody = ({
  setPreBodyComponents,
  setBodyAttributes,
  setHeadComponents,
  setPostBodyComponents
}) => {
  // adds the loader element.
  setPreBodyComponents([
    <div className="loader-wrapper">
      <span className="loader" id="loader"></span>
    </div>
  ]);
  setBodyAttributes({className: 'is-loading'});
  setHeadComponents([<link rel="preload" href="/scripts/preloader.js" as="script" />]);
  setPostBodyComponents([
    <script src='/scripts/preloader.js' />
  ]);
};

// export {wrapRootElement} from './gatsby-browser';
