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
      tl
        .to(brandRef.current, { duration: 0.8, transform: "none", ease: 'Power2.easeOut'})
        .to(burgerRef.current, { duration: 0.8, transform: "none", ease: 'Power2.easeOut'}, 0)
    }

    // brandRef.current.classList.add('ready')

    // const tl = gsap.timeline();
    // tl.to(brandRef.current, {duration: 0.8, transform: "none"})

  }, []);

  return (
    <nav
      data-scroll-sticky=""
      data-scroll-target="#section0"
    >
    {/* =BRAND= */}
      <div className="brand" ref={brandRef}>
        <span className="brand__img"></span>
        <span className="brand__text">
          <Link to="/">anes marzuki</Link>
        </span>
      </div>

      {/* =BURGER= */}
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

    </nav>
  )
};

export default Navbar;
