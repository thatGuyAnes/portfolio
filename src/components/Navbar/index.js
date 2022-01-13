import React, {useRef, useState, useEffect} from 'react';
import {Link} from 'gatsby';
import gsap from 'gsap';

import './style.scss';

const Navbar = ({children}) => {

  const brandRef = useRef();
  const burgerRef = useRef();

  useEffect(() => {
    if (brandRef.current) {
      const tl = gsap.timeline();

      // myTimeline
      //   .set(imageLargeInside, { backgroundImage: `url(${imagelarge})` })
      //   .set(imageSmallInside, { backgroundImage: `url(${imagesmall})` })
      //   .to([imageLarge, imageSmall], { autoAlpha: 1 })
      //   .to(otherLinks, { color: '#fff', autoAlpha: 0.2 }, 0)
      //   .to(e.target, { color: '#fff', autoAlpha: 1 }, 0)
      //   .to(background, { backgroundColor: color, ease: 'none' }, 0);

      tl
        .to(brandRef.current, {xPercent: 100, duration: 0.8, ease: 'Power2.easeOut'})
        .to(burgerRef.current, {x: 0, duration: 0.8, ease: 'Power2.easeOut'}, 0)
    }
  }, []);

  return (
    <>
      <div className="brand" ref={brandRef}>
        <span className="brand__img"></span>
        <span className="brand__text">
          <Link to="/">anes marzuki</Link>
        </span>
      </div>

      <div className="burger" ref={burgerRef}>
        <button className="burger__open">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className="main-nav">
        <ul>
          <li><a href="#0">Home</a></li>
          <li><a href="#0">About</a></li>
          <li><a href="#0">Projects</a></li>
          <li><a href="#0">Blog</a></li>
          <li><a href="#0">Contact</a></li>
        </ul>
      </nav>

    </>
  )
};

export default Navbar;
