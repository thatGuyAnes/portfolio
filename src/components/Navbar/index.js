import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'gatsby';
import gsap from 'gsap';
import './style.scss';

const Navbar = ({ children }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const brandRef = useRef();
  const brandLinkRef = useRef();

  const burgerWrapperRef = useRef();
  const burgerRef = useRef();

  const menuRef = useRef();
  /* The 'menuLinks' list must have a ref, otherwise its value would always be undefined
  after the int*/
  let menuLinks = useRef(null);

  const tlInit = useRef(gsap.timeline());

  const tlmenu = gsap.timeline();

  // // brand hover
  // const onMouseEnter = (e) => {
  //   e.target.classList.toggle('-active');
  // };
  // const onMouseLeave = (e) => {
  //   e.target.classList.toggle('-active');
  // };

  // Hides links inside menu.
  const initMenu = () => {
    menuLinks.current = gsap.utils.toArray('.c-menu__item span');
    menuLinks.current.forEach((link, _i) => {
      gsap.set(link, { yPercent: 100 });
    });
  };

  // animate-In the burger and brand.
  const initNavAnimation = () => {
    tlInit.current
      .to(brandRef.current, {
        duration: 0.8,
        transform: 'none',
        ease: 'Power2.easeOut',
      })
      .to(
        burgerWrapperRef.current,
        { duration: 0.8, transform: 'none', ease: 'Power2.easeOut' },
        0
      );
  };

  const toggleMenu = () => {

    if (!isMenuOpen) {
      // Menu IN
      setIsMenuOpen(true);
      tlmenu
        .to(menuRef.current, { autoAlpha: 1 })
        .fromTo(
          menuRef.current.querySelector('.c-menu__left'),
          { yPercent: -100 },
          { yPercent: 0 },
          0
        )
        .fromTo(
          menuRef.current.querySelector('.c-menu__right'),
          { yPercent: 100 },
          { yPercent: 0 },
          0
        )
        .fromTo(
          menuLinks.current,
          { yPercent: -100 },
          { yPercent: 0, stagger: 0.1 }
        );
      burgerRef.current.classList.toggle('-active');
    } else {
      // Menu OUT
      setIsMenuOpen(false);
      tlmenu
        .to(menuLinks.current, { yPercent: 100, stagger: -0.1, delay: 0.1 })
        .to(
          menuRef.current.querySelector('.c-menu__left'),
          { yPercent: 100 },
          '<40%'
        )
        .to(
          menuRef.current.querySelector('.c-menu__right'),
          { yPercent: -100 },
          '<'
        )
        .to(menuRef.current, { duration: 0.3, autoAlpha: 0 }, '<90%');
      // burgerRef.current.style.pointerEvents = `unset`;
      burgerRef.current.classList.toggle('-active');
    }
  };

  useEffect(() => {
    initMenu();
    if (brandRef.current) {
      initNavAnimation();
      // brandLinkRef.current.addEventListener('mouseenter', onMouseEnter);
      // brandLinkRef.current.addEventListener('mouseleave', onMouseLeave);
    }
    return () => {
      tlInit.current.kill();
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
          <Link to="/"
            className="js-hover"
            ref={brandLinkRef}
          >
            am<br />{' '}
          </Link>
        </span>
      </div>

      {/* =BURGER= */}
      <div className="c-burger_wrapper " ref={burgerWrapperRef}>
        <button
          aria-label="toggle menu"
          className="c-burger js-hover"
          ref={burgerRef}
          onClick={toggleMenu}
        >
          <span className="c-burger__line"></span>
        </button>
      </div>

      {/* =Menu= */}
      <div className="c-menu" ref={menuRef}>

        <section className="c-menu__left"></section>
        <section className="c-menu__right"></section>

        <nav className="c-menu__list">
          <ul>
            <li className="c-menu__item">
              <span>
                <Link to="/" className="js-hover">
                  Home
                </Link>
              </span>
            </li>
            <li className="c-menu__item">
              <span>
                <Link to="/about" className="js-hover">
                  About
                </Link>
              </span>
            </li>
            <li className="c-menu__item">
              <span>
                <Link to="/projects" className="js-hover">
                  Projects
                </Link>
              </span>
            </li>
            <li className="c-menu__item">
              <span>
                <a
                  href="https://blog.anesmarzuki.com/"
                  className="js-hover"
                  target="_blank"
                >
                  Blog
                </a>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
