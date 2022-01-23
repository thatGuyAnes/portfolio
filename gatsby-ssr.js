import React from 'react';

export const onRenderBody = ({
  setPreBodyComponents,
  setBodyAttributes,
  setHeadComponents,
  setPostBodyComponents
}) => {
  // adds the loader element.
  setPreBodyComponents([
    <div className="c-loader-wrapper" key={`lodrwrp`}>
      <span className="c-loader" id="loader"></span>
    </div>
  ]);
  setBodyAttributes({className: 'is-loading'});
  setHeadComponents([<link rel="preload" href="/scripts/preloader.js" as="script" key={`prldr`} />]);
  setPostBodyComponents([
    <script src='/scripts/preloader.js' key={`prldrScript`}/>
  ]);
};

export {wrapRootElement} from './gatsby-browser';
