import React, {useRef, useState, useEffect} from 'react';
import Iam from '../svgs/Iam-svg';
import NotMe from '../svgs/NotMe-svg';
import HeaderImg from '../../images/ff1.png';
import Arrow from '../Arrow';
import Swiggly from '../svgs/Swiggly-svg';
import Scroll from '../svgs/Scroll-svg';
import gsap from 'gsap';

import './style.scss';

export default function Header() {

  const headerRef = useRef();
  const h1Ref = useRef();
  const hgTopRef = useRef();
  const hgRef = useRef();
  const imgRef = useRef();
  const notMeSvgRef = React.createRef();

  const animateImage = (e) => {

    // destructuring
    const {clientX, clientY, target} = e;

    // we want the 'hg' element to act as the middle of the screen for this effect to work.
    // h1.width - (hg.width/2)
    const relativeX = h1Ref.current.getBoundingClientRect().width - (hgRef.current.getBoundingClientRect().width / 2);
    const relativeY = h1Ref.current.getBoundingClientRect().height - (hgRef.current.getBoundingClientRect().height / 2);

    const xPos = (clientX / relativeX) - 0.5;
    const yPos = (clientY / relativeY) - 0.5;

    // const modifier = (index) => index * 1.2 + 0.5;

    gsap.to(hgTopRef.current, {
      duration: 1.2,
      // translations.
      x: xPos * 20,
      y: yPos * 20,
      // rotations.
      rotationY: xPos * 20,
      rotationX: yPos * -10,
      ease: 'Power3.out'
    });
  }  // </animateImage>

  const imgMouseOver = (e) => {
    // show the notMe svg.
    notMeSvgRef.current.style.opacity = 1;
  }
  const imgMouseOut = (e) => {
    // show the notMe svg.
    notMeSvgRef.current.style.opacity = 0;
  }

  useEffect(() => {
    if (h1Ref.current && imgRef.current) {
      h1Ref.current.addEventListener('mousemove', animateImage);

      imgRef.current.addEventListener('mouseover', imgMouseOver)
      imgRef.current.addEventListener('mouseout', imgMouseOut)

      return () => {
        h1Ref.current.removeEventListener('mousemove', animateImage);
      }
    }
  }, []);

  return (
    <header className='header' ref={headerRef} data-scroll-section="">

      <Arrow />

      <h1 className="header__content-container o-container" ref={h1Ref}>

        <span className="line" data-scroll=''>
          <span className="header__text" data-scroll='' data-scroll-speed={3} data-scroll-position="top">
            <span id="letter-f" className="header__text"><Iam />f</span>ront-end
          </span>
        </span>

        <span className="line" data-scroll=''>
          <span className="header__text" data-scroll='' data-scroll-speed={2} data-scroll-position="top">
            web
          </span>
          <div className="hg" ref={hgRef} data-scroll='' data-scroll-speed={2} data-scroll-position="top">
            <span className="hg__top" ref={hgTopRef}>
              <img ref={imgRef} src={HeaderImg} alt="an image composition with a headless man" />
              <NotMe ref={notMeSvgRef}/>
            </span>
          </div>
        </span>

        <span className="line" data-scroll=''>
          <span className="header__text" data-scroll='' data-scroll-speed={1} data-scroll-position="top">developer</span>
        </span>

      </h1>

    </header>
  )

};
