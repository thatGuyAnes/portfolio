import React, {useRef, useState, useEffect} from 'react';
import {Link} from 'gatsby';
import gsap from 'gsap';
import './style.scss';

const Navbar = ({children}) => {

  const brandRef = useRef();
  const burgerWrapperRef = useRef();
  const burgerRef = useRef();
  const menuRef = useRef();

  const burgerClickHandler = () => {
    console.log('Burger clicked!');
    menuRef.current.classList.toggle('active');
    // extend left the length of the spans(lines) inside the burger.
  };

  useEffect(() => {
    if (brandRef.current) {
      const tl = gsap.timeline();
      tl
        .to(brandRef.current, { duration: 0.8, transform: "none", ease: 'Power2.easeOut'})
        .to(burgerWrapperRef.current, { duration: 0.8, transform: "none", ease: 'Power2.easeOut'}, 0)
    }
  }, []);

  return (
    <nav
      data-scroll-sticky=""
      data-scroll-target="#scroll-container"
    >
    {/* =BRAND= */}
      <div className="c-brand" ref={brandRef}>
        <span className="c-brand_img"></span>
        <span className="c-brand_text">
          <Link to="/" className="js-hover">anes marzuki <br/> <span className="c-brand_subtitle">web folio</span></Link>
        </span>
      </div>

      {/* =BURGER= */}
      <div className="c-burger_wrapper" ref={burgerWrapperRef}>
        <button className="c-burger js-hover" ref={burgerRef} onClick={burgerClickHandler}>
          <span className="c-burger_line"></span>
          <span className="c-burger_line"></span>
          <span className="c-burger_line"></span>
        </button>
      </div>

      {/* <div className="c-menu" ref={menuRef}> */}
      {/*   <span className="c-menu_line"></span> */}
      {/*   <span className="c-menu_line"></span> */}
      {/*   <span className="c-menu_line"></span> */}
      {/*   <span className="c-menu_line"></span> */}
      {/* </div> */}

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
