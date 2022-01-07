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
  // setPostBodyComponents([<svg className="cursor" width="80" height="80" viewBox="0 0 80 80"> <circle className="cursor__inner" cx="40" cy="40" r="20" /></svg>, <script src='/scripts/preloader.js' />]);
  setPostBodyComponents([<script src='/scripts/preloader.js' />]);
};
