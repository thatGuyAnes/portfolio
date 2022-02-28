import React, { useRef, useEffect } from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './style.scss';

gsap.registerPlugin(ScrollTrigger);

const ScrollProgressBar = () => {
  const lineRef = useRef();
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (scroll) {
      scroll.on('scroll', (args) => {
        const progress = (args.scroll.y / args.limit.y) * 100;
        lineRef.current.style.width = `${progress}%`;
      });
    }
  }, [scroll]);

  return <span className="line" ref={lineRef}></span>;
};

export default ScrollProgressBar;
