import React from 'react';
import gsap from 'gsap';

// import "splitting/dist/splitting.css";
// import "splitting/dist/splitting-cells.css";
// import Splitting from "splitting";

import './style.scss';

const Header = () => {


  return (
    <header className='header'>

      <h1 className="header__text">

        <span className="line" data-scroll=''>
          <span data-scroll='' data-scroll-speed={3} data-scroll-position="top">front-end</span>
        </span>

        <span className="line" data-scroll=''>
          <span data-scroll='' data-scroll-speed={2} data-scroll-position="top">web</span>
        </span>

        <span className="line" data-scroll=''>
          <span data-scroll='' data-scroll-speed={1} data-scroll-position="top">developer</span>
        </span>

      </h1>

    </header>
  )

};

export default Header;
