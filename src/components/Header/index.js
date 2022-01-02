import React from 'react';
import {Link} from 'gatsby';
import Navbar from '../Navbar';
import gsap from 'gsap';

import './style.scss';

const Header = () => {

  const textRef = React.useRef();
  const query = gsap.utils.selector(textRef);

  React.useEffect(() => {
    console.log('mounted')
    gsap.to(query('span'), {
      y: '0%',
      duration: 0.8,
      stagger: 0.3,
      alpha: 1,
      ease: 'Power2.easeOut'
        // ease: "power2.in"
    })
  }, [query]);

  return (
    <header>
      <div className="header__text" ref={textRef}>
        <div className="line">
          <span>front-end</span>
        </div>
        <div className="line">
          <span>web</span>
        </div>
        <div className="line">
          <span>developer</span>
        </div>
      </div>
      {/* <h1>front-end web developer</h1> */}
    </header>
  )

};

export default Header;
