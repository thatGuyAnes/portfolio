import React from 'react';

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
  setBodyAttributes({className: 'preloader_on'}); // add class to body.
  // setHeadComponents([<link rel="preload" href="/scripts/preloader.js" as="script" />]);
  setPostBodyComponents([<script src='/scripts/preloader.js' />]);
};
