import React from 'react';
import Swiggly from '../svgs/Swiggly-svg';
import Scroll from '../svgs/Scroll-svg';

import './style.scss';

const Arrow = () => {
  return (

    <div className="c-arrow-container">

      <div className="c-arrow">

        <div className="c-arrow_svg_wrapper">
          <svg width="30" height="123" viewBox="0 0 30 123" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5858 122.414C14.3668 123.195 15.6332 123.195 16.4142 122.414L29.1421 109.686C29.9232 108.905 29.9232 107.639 29.1421 106.858C28.3611 106.077 27.0948 106.077 26.3137 106.858L15 118.172L3.6863 106.858C2.90525 106.077 1.63892 106.077 0.857869 106.858C0.0768203 107.639 0.0768204 108.905 0.857869 109.686L13.5858 122.414ZM13 8.74228e-08L13 121L17 121L17 -8.74228e-08L13 8.74228e-08Z" fill="black" />
          </svg>
        </div>

        <span className="c-arrow_text_wrapper">
          <span className="c-arrow_special o-special-container"><Swiggly /><Scroll />skroll </span>down
        </span>

      </div>

    </div>

  )
};

export default Arrow;
