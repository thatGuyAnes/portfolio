import React, {useRef, useEffect, useState} from 'react';
import Junior from '../svgs/Junior-svg';
import StarLeft from '../svgs/StarLeft-svg';
import StarRight from '../svgs/StarRight-svg';
import Underline from '../svgs/Underline-svg';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import './style.scss';

const Intro = () => {

  const introRef = useRef();

  return (
    <section className="intro" ref={introRef} data-scroll-section="">
      <h2 className="intro__title">
        <span></span>
      </h2>
      <div className="intro__image"></div>
      <div className="intro__text">
        <p>About</p>
    <h3>Anes is a <span className="junior"><Junior />front</span>-end web designer and Javascript developer
          from Tunisia with a <span className="passion"><StarLeft /><Underline />passion<StarRight /></span> for interactive design and web
          technologies.</h3>
      </div>
      <div className="intro__button"></div>
    </section>
  )
};

export default Intro;
