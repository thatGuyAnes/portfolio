import React from 'react';
import Loader from './src/components/Loader';

export const onRenderBody = ({
  setPreBodyComponents,
  setBodyAttributes,
  setHeadComponents,
  setPostBodyComponents
}) => {
  // adds the loader element.
  setPreBodyComponents([
    <Loader key={`lodrwrp`}/>
     // <div className="c-loader-wrapper" key={`lodrwrp`}>
     //   <span className="c-loader" id="loader"></span>
     // </div>
  ]);
  setBodyAttributes({className: 'is-loading is-light'});
  // setHeadComponents([<link rel="preload" href="/scripts/preloader.js" as="script" key={`prldr`} defer />]);
  setPostBodyComponents([
<script src="https://unpkg.com/imagesloaded@5/imagesloaded.pkgd.min.js" key={`imgLoaded`}/>,
    <script src='https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js' key={`gsap`} />,
    <script src='/scripts/preloader.js' key={`prldrScript`}/>,
    <script src='/scripts/tagCanvas.min.js' key={`tagcanvas`}/>
  ]);
};

export {wrapRootElement} from './gatsby-browser';
