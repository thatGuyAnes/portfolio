import React, {useRef, useEffect} from 'react';
import Junior from '../svgs/Junior-svg';
import StarLeft from '../svgs/StarLeft-svg';
import StarRight from '../svgs/StarRight-svg';
import Underline from '../svgs/Underline-svg';
import gsap from 'gsap';


import './style.scss';


const Intro = () => {

  const introRef = useRef();
  const introTextH3Ref = useRef();

  /*We want to position the h3 to the right without the use of absolute positioning
  nor a flex container*/
  const onResize = () => {
    const sectionBounds = introRef.current.getBoundingClientRect();
    const h3Bounds = introTextH3Ref.current.getBoundingClientRect();

    // get the distance between h3 and righ of section.
    // section.right - h3.width
    const distance = sectionBounds.width - h3Bounds.width;
    if (distance === 0) {
      console.log('distance 0')
      return;
    }

    // move h3 to the right by the distance.
    gsap.to(introTextH3Ref.current, {x: distance})
  };

  useEffect(() => {
    onResize();
    window.onresize = onResize;
  }, []);

  return (

    <section className="c-intro o-container"
      ref={introRef}
      data-scroll-section=""
    >
      <h2 className="c-intro_title">
        <span></span>
      </h2>

      <div className="c-intro_image-wrapper"></div>

      <div className="c-intro_text">
        <p>Who What Where ??</p>
        <h3 ref={introTextH3Ref}>Anes is a <span className="c-intro_special o-special-container -junior"><Junior />front</span>
          -end web designer and <span className="c-intro_special -javascript hoverable">Javascript</span> developer
          from Tunisia with a<span className="c-intro_special o-special-container -passion"><StarLeft className="c-star star-l" /><Underline />passion<StarRight className="c-star star-r" /></span> for interactive design and web
          technologies.</h3>
        <p className="test">Lorem  asldkjflksjdflkjsdklfjlksjdflkjsdkfjasdf
          sldfjlskdjflkjsdlkfjlksjdfkljsdlkjfklsdjf
          sdlkjflskdjflksjdklfjlskdjf
          sldkjflksjdfkk</p>
      </div>
      <div className="intro_button"></div>

    </section>

  )
};

export default Intro;
