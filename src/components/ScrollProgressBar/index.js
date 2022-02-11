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
      // gsap.from(lineRef.current, {
      //   scrollTrigger: {
      //     trigger: scroll.el,
      //     scroller: scroll.el,
      //     scrub: true,
      //     start: "top top",
      //     end: () => "+=" + (scroll.el.offsetHeight - 500),
      //     onUpdate() {
      //       console.log("Update")
      //     }
      //   },
      //   scaleX: 0,
      //   transformOrigin: "top",
      //   ease: "none"
      // })
      scroll.on('scroll', (args) => {
        const progress = (args.scroll.y / args.limit.y) * 100;
        lineRef.current.style.width = `${progress}%`;
      });
    }
  }, [scroll]);

  return <span className="line" ref={lineRef}></span>;
};

export default ScrollProgressBar;
