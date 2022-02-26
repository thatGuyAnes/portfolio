import React, {useEffect, useRef} from 'react';
import {useLocation} from '@reach/router';
import {LocomotiveScrollProvider, useLocomotiveScroll} from 'react-locomotive-scroll'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollProgressBar from '../ScrollProgressBar';
import Navbar from '../Navbar';
import Footer from '../Footer';

import './style.scss';

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerProxy = () => {
  const {scroll} = useLocomotiveScroll();

  useEffect(() => {
    if (scroll) {
      // Return undefined if scroll doesn't exist!
      const element = scroll?.el;

      // each time Locomotive Scroll updates, tell ScrollTrigger to update too
      // (sync positioning)
      scroll.on("scroll", ScrollTrigger.update);

      // tell ScrollTrigger to use these proxy methods for the
      // scroll element since Locomotive Scroll is hijacking things
      ScrollTrigger.scrollerProxy(element, {
        scrollTop(value) {
          return arguments.length
            ? scroll.scrollTo(value, 0, 0)
            : scroll.scroll.instance.scroll.y; // we don't have to define a scrollLeft because we're only scrolling vertically.
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        // LocomotiveScroll handles things completely differently on mobile
        // devices - it doesn't even transform the container at all! So to get
        // the correct behavior and avoid jitters, we should pin things with
        // position: fixed on mobile. We sense it by checking to see if there's
        // a transform applied to the container (the
        // LocomotiveScroll-controlled element).
        pinType: element.style.transform ? "transform" : "fixed",
      });
    }

    return () => {
      ScrollTrigger.addEventListener("refresh", () => setTimeout(() => scroll?.update, 500 ));
      ScrollTrigger.refresh();
    };
  }, [scroll]);

  return null;
};

const Layout = ({children}) => {

const { pathname } = useLocation() // With react-router

  const containerRef = useRef(null);

  const initEvents = () => {
    const cursor = document.querySelector('.cursor');
    const onMouseOver = (event) => {
      if (event.target.classList.contains('js-hover')) {
        cursor.classList.toggle('-expand');
      }
    };
    const onMouseLeave = (event) => {
      if (event.target.classList.contains('js-hover')) {
        cursor.classList.toggle('-expand');
      }
    };
    containerRef.current.addEventListener('mouseover', onMouseOver)
    containerRef.current.addEventListener('mouseout', onMouseLeave)

  };

  useEffect(() => {
    initEvents();
  }, []);

  return (
    <LocomotiveScrollProvider
      options={
        {
          smooth: true,
          // smoothMobile: false,
          // getDirection: true,
          // touchMultiplier: 2.5,
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          }
        }
      }
      watch={[]}
      location={pathname}
      containerRef={containerRef}
      onLocationChange={scroll => scroll.scrollTo(0, {duration: 0, disableLerp: true})} // If you want to reset the scroll position to 0 for example
      // onUpdate={() => console.log('Updated, but not on location change!')} // Will trigger on      containerRef={containerRef}
    >
      <ScrollTriggerProxy />
      <div className="layout"
        data-scroll-container
        ref={containerRef}
        id="scroll-container"
      >
        <div className="bg"></div>
        <ScrollProgressBar />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </LocomotiveScrollProvider>
  )

};

export default Layout;
