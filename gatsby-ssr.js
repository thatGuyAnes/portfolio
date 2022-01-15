import React from 'react';

export const onRenderBody = ({
  setPreBodyComponents,
  setBodyAttributes,
  setHeadComponents,
  setPostBodyComponents
}) => {
  // adds the loader element.
  setPreBodyComponents([
    <div className="loader-wrapper" key={`lodrwrp`}>
      <span className="loader" id="loader"></span>
    </div>
  ]);
  setBodyAttributes({className: 'is-loading'});
  setHeadComponents([<link rel="preload" href="/scripts/preloader.js" as="script" key={`prldr`} />]);
  setPostBodyComponents([
    <script src='/scripts/preloader.js' />
  ]);
};

// export {wrapRootElement} from './gatsby-browser';
