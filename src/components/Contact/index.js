import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import ScrollTrigger from 'gsap/ScrollTrigger';

import './style.scss';

const Contact = () => {
  const txtWrapperRef = useRef();

  gsap.registerPlugin(ScrollTrigger);
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    const txtWrapper = gsap.utils.selector(txtWrapperRef.current);
    const tltxtReveal = gsap.timeline();

    if (scroll) {
      ScrollTrigger.create({
        trigger: document.querySelector('.c-contact'),
        scroller: scroll?.el,
        start: 'top 20%',
        animation: tltxtReveal,
      });

      const lines = txtWrapper('span');

      tltxtReveal
        .from( lines, { yPercent: 80, duration: 0.9, stagger: 0.1 })
        .from(lines, {autoAlpha: 0, duration: 0.8}, '<+=60%')
    }
  }, [scroll]);

  return (
    <section className="c-contact o-container" data-scroll-section="">
      <hr className="c-contact__line" data-scroll data-scroll-offset="100" />
      <div
        className="c-contact__text-wrapper"
        ref={txtWrapperRef}
        data-scroll=""
      >
        <span className="c-contact__text__line">For more</span>
        <span className="c-contact__text__line">information,</span>
        <span className="c-contact__text__line">questions or</span>
        <span className="c-contact__text__line">project inquiery,</span>
        <span className="c-contact__text__line">please feel free</span>
        <span className="c-contact__text__line">
          to get in{' '}
          <a
            className="js-hover c-contact__link"
            href="mailto:anesmarzuki@gmail.com?subject=Let's Talk"
          >
            touch.
          </a>
        </span>
      </div>
    </section>
  );
};

export default Contact;
