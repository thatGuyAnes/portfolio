import React, {useRef, useState, useEffect} from 'react';
import Iam from '../svgs/Iam-svg';
import NotMe from '../svgs/NotMe-svg';
import HeaderImg from '../../images/ff1.png';
import gsap from 'gsap';

import './style.scss';

export default function Header() {

  const headerRef = useRef();
  const hgTopRef = useRef();
  const hgRef = useRef();

  let hgPos = {
    left: 0,
    top: 0,
    width: 0,
    height: 0
  };

  const animateImage = (e) => {

    // destructuring
    const {clientX, clientY, target} = e;
    const {clientWidth, clientHeight} = target;
    
    const relativeX = hgRef.current.getBoundingClientRect().left + (hgRef.current.getBoundingClientRect().width / 2) - 0.5;
    const relativeY = hgRef.current.getBoundingClientRect().top + (hgRef.current.getBoundingClientRect().top / 2) - 0.5;

    const xPos = (clientX / relativeX) - 0.5;
    const yPos = (clientY / relativeY) - 0.5;

    // const modifier = (index) => index * 1.2 + 0.5;

    gsap.to(hgTopRef.current, {
      duration: 1.2,
      // translations.
      x: xPos * 20,
      y: yPos * 20,
      // rotations.
      rotationY: xPos * 40,
      rotationX: yPos * -10,
      ease: 'Power3.out'
    });
  }  // </animateImage>

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.addEventListener('mousemove', animateImage);
      return () => {
        headerRef.current.removeEventListener('mousemove', animateImage);
      }
    }
  }, []);

  return (
    <header className='header' ref={headerRef}>

      <h1 className="header__text">

        <span className="line" data-scroll=''>
          <span data-scroll='' data-scroll-speed={3} data-scroll-position="top">
            <span id="letter-f"><Iam />f</span>ront-end
          </span>
        </span>

        <span className="line" data-scroll=''>

          <span data-scroll='' data-scroll-speed={2} data-scroll-position="top">
            web
          </span>

          <div className="hg" ref={hgRef}>
            <span className="hg__top" ref={hgTopRef}>
              <img src={HeaderImg} alt="an image composition with a headless man" />
            </span>
          </div>

        </span>

        <span className="line" data-scroll=''>
          <span data-scroll='' data-scroll-speed={1} data-scroll-position="top">developer</span>
        </span>

      </h1>

    </header>
  )

};
