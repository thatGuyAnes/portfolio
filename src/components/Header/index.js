import React, {useRef, useState, useEffect} from 'react';
import Iam from '../svgs/Iam-svg';
import NotMe from '../svgs/NotMe-svg';
import HeaderImg from '../../images/ff1.png';
import Arrow from '../Arrow';
import gsap from 'gsap';

import {useLocomotiveScroll} from 'react-locomotive-scroll';

import './style.scss';

const Header = () => {

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

  const imgMouseOver = React.useCallback((_e) => {
    // show the notMe svg.
    notMeSvgRef.current.style.opacity = 1;
  }, [notMeSvgRef]);

  const imgMouseOut = React.useCallback((_e) => {
    // show the notMe svg.
    notMeSvgRef.current.style.opacity = 0;
  }, [notMeSvgRef]);

  useEffect(() => {
    if (h1Ref.current && imgRef.current) {
      h1Ref.current.addEventListener('mousemove', animateImage);

      hgTopRef.current.addEventListener('mouseover', imgMouseOver)
      hgTopRef.current.addEventListener('mouseout', imgMouseOut)

      // return () => {
      //   h1Ref.current.removeEventListener('mousemove', animateImage);
      // }
    }
  }, [imgMouseOver, imgMouseOut]);

  return (

    <header
      className='c-header'
      ref={headerRef}
      data-scroll-section=""
    >

      <Arrow />

      <div className="c-header_main-container">

        <h1 className="c-header_h o-container" ref={h1Ref} data-scroll="">

          {/* <div className="info"> */}
          {/*   <span>developer</span> */}
          {/*   <span>designer</span> */}
          {/* </div> */}

          {/* LINE #1 */}
          <span className="c-header_h_line -one" data-scroll=''>
            <span className="c-header_h_line_text" data-scroll='' data-scroll-speed={3} data-scroll-position="top">
              {/* <span className="c-header_special o-special-container -iam"><Iam />f</span> */}
              {/* <span className="c-header_char">r</span> */}
              {/* <span className="c-header_char -hollow -o">o</span> */}
              {/* <span className="c-header_char">n</span> */}
              {/* <span className="c-header_char">t</span> */}
              {/* <span className="c-header_char">-</span> */}
              {/* <span className="c-header_char -hollow -e">e</span> */}
              {/* <span className="c-header_char">n</span> */}
              {/* <span className="c-header_char -hollow -d">d</span> */}






              <span className="name">Anes</span>
            </span>
          </span>

          {/* LINE #2 */}
          <span className="c-header_h_line -two" data-scroll=''>

            <span className="c-header_h_line_text" data-scroll='' data-scroll-speed={2} data-scroll-position="top">
              <span className="name">Marzuki</span>


              {/* <span className="c-header_char">w</span> */}
              {/* <span className="c-header_char -hollow -e">e</span> */}
              {/* <span className="c-header_char -hollow -b">b</span> */}
            </span>

            {/* <div className="c-header_h_line_g" ref={hgRef} data-scroll='' data-scroll-speed={2} data-scroll-position="top"> */}
            {/*   <span className="c-header_h_line_g_top" ref={hgTopRef}> */}
            {/*     <img className="js-hover" ref={imgRef} src={HeaderImg} alt="composition of a headless man" /> */}
            {/*   </span> */}
            {/*   <span className="c-header_special -notme"><NotMe ref={notMeSvgRef} /></span> */}
            {/* </div> */}

          </span>

          {/* LINE #3 */}
{/*           <span className="c-header_h_line -three" data-scroll=''> */}
{/*             <span className="c-header_h_line_text" data-scroll='' data-scroll-speed={1} data-scroll-position="top"> */}
{/*               <span className="c-header_char -hollow -d">d</span> */}
{/*               <span className="c-header_char -hollow -e">e</span> */}
{/*               <span className="c-header_char">v</span> */}
{/*               <span className="c-header_char -hollow -e">e</span> */}
{/*               <span className="c-header_char">l</span> */}
{/*               <span className="c-header_char -hollow -o">o</span> */}
{/*               <span className="c-header_char -hollow -p">p</span> */}
{/*               <span className="c-header_char -hollow -e">e</span> */}
{/*               <span className="c-header_char">r</span> */}
{/*             </span> */}
{/*           </span> */}
{/*  */}
        </h1>

      </div>

    </header >
  )

};

export default Header;
