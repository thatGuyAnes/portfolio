import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'gatsby';
import gsap from 'gsap';
import './style.scss';

const Navbar = ({ children }) => {
  const brandRef = useRef();
  const burgerWrapperRef = useRef();
  const burgerRef = useRef();
  const menuRef = useRef();

  const menuClickHandler = () => {
    menuRef.current.classList.toggle('active');
    // extend left the length of the spans(lines) inside the burger.
  };

  useEffect(() => {
    if (brandRef.current) {
      const tl = gsap.timeline();
      // animate in the burger and brand.
      tl.to(brandRef.current, {
        duration: 0.8,
        transform: 'none',
        ease: 'Power2.easeOut',
      }).to(
        burgerWrapperRef.current,
        { duration: 0.8, transform: 'none', ease: 'Power2.easeOut' },
        0
      );
    }
  }, []);

  return (
    <nav
      data-scroll-sticky=""
      data-scroll-target="#scroll-container"
      className="c-top-nav"
    >
      {/* =BRAND= */}
      <div className="c-brand " ref={brandRef}>
        <span className="c-brand_img "></span>
        <span className="c-brand_text ">
          <Link to="/" className="js-hover ">
            anes marzuki <br />{' '}
            <span className="c-brand_subtitle">webfolio</span>
          </Link>
        </span>
      </div>

      {/* =BURGER= */}
      <div className="c-burger_wrapper " ref={burgerWrapperRef}>
        <button
          className="c-burger js-hover"
          ref={burgerRef}
          onClick={menuClickHandler}
        >
          <span className="c-burger_line"></span>
          <span className="c-burger_line"></span>
          <span className="c-burger_line"></span>
        </button>
      </div>

      <div className="c-menu" ref={menuRef}>
        <button className="c-menu__close js-hover" onClick={menuClickHandler}>close</button>
        <div className="c-menu__left"></div>
        <div className="c-menu__right"></div>

        <nav className="c-menu__list">
          <ul>
            <li className="c-menu__item">
              <Link to="#" className="js-hover">About</Link>
            </li>
            <li className="c-menu__item">
              <Link to="/projects" className="js-hover">Projects</Link>
            </li>
            <li className="c-menu__item">
              <Link to="#0" className="js-hover">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
