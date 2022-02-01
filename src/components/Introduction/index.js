import React, {useRef, useEffect} from 'react';
import {Link} from 'gatsby';
import Sphere from '../Sphere';
import Junior from '../svgs/Junior-svg';
import StarLeft from '../svgs/StarLeft-svg';
import StarRight from '../svgs/StarRight-svg';
import Underline from '../svgs/Underline-svg';
import ScrollProgressBar from '../ScrollProgressBar';
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

    // translate h3 to the right by the calculated distance.
    gsap.to(introTextH3Ref.current, {x: distance})
  };

  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
    window.removeEventListener('resize', onResize);
    }
  }, []);

  return (
    <section className="c-intro o-container"
      ref={introRef}
      data-scroll-section=""
    >
      {/* <h2 className="c-intro_title"> */}
      {/*   <span></span> */}
      {/* </h2> */}

      {/* <div className="c-intro_image-wrapper"></div> */}
      {/* about box */}
      {/* <aside className="c-intro_box" data-scroll="" data-scroll-speed={2}> */}
      {/*     <span>a</span> */}
      {/*     <span>b</span> */}
      {/*     <span>o</span> */}
      {/*     <span>u</span> */}
      {/*     <span>t</span> */}
      {/*   </aside> */}

      <div className="c-intro_main-container">

        <aside className="c-intro_canvas-container" data-scroll="" data-scroll-speed={1} data-scroll-position="top">
          <Sphere />
        </aside>

        <div className="c-intro_text" data-scroll="" data-scroll-speed={1} data-scroll-position="top">
          {/* <p>Who What Where ??</p> */}
          <h3 ref={introTextH3Ref}>Anes is a <span className="c-intro_special o-special-container -junior"><Junior />front</span>
            -end web designer and Javascript developer
            from Tunisia with a<span className="c-intro_special o-special-container -passion"><StarLeft className="c-star star-l" /><Underline />passion<StarRight className="c-star star-r" /></span> for interactive design and web
            technologies.
            <div className="c-intro_link-wrapper">
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"> */}
              {/*   <path d="M442.44 123.79C395.53 170.7 357 210.42 357 211.62c0 */}
              {/*     1.2 36.85 39.25 81.85 84.24l82.08 */}
              {/*     82.08H10v244.11h510.94l-82.08 82.08c-44.99 44.99-81.85 */}
              {/*     83.04-81.85 84.24 0 1.44 38.53 40.92 85.67 88.07l85.44 85.44 */}
              {/*     230.94-230.94L990 500 759.06 269.06 528.12 38.12l-85.68 */}
              {/*     85.67zm287.9 578.43L528.12 904.44 470.68 847l-57.44-57.44 */}
              {/*     102.43-102.43c56.24-56.24 102.19-102.91 102.19-104.1 */}
              {/*     0-.96-127.56-1.68-283.59-1.68H50.68V418.63h283.59c156.03 0 */}
              {/*     283.59-.72 283.59-1.68 0-1.2-45.95-47.86-102.19-104.1L413.25 */}
              {/*     210.43l57.44-57.44 57.44-57.44 202.22 202.22L932.56 500 */}
              {/*     730.34 702.22z" /> */}
              {/* </svg> */}


              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"> */}
              {/*   <path d="M10 469.8c0-7.5 6-13.5 13.5-13.5h886.6c7.5 0 13.5 6 13.5 13.5v58.5c0 7.5-6 13.5-13.5 13.5H23.5c-7.5 0-13.5-6-13.5-13.5v-58.5z" /> */}
              {/*   <path d="M624.1 759.2c-5.3-5.3-5.3-13.8 0-19.1l301.5-290.3c5.3-5.3 13.8-5.3 19.1 0l41.4 41.4c5.3 5.3 5.3 13.8 0 19.1L684.5 800.6c-5.3 5.3-13.8 5.3-19.1 0l-41.3-41.4z" /> */}
              {/*   <path d="M986 508.8c5.3-5.3 5.3-13.8 0-19.1L684.5 199.4c-5.3-5.3-13.8-5.3-19.1 0L624 240.8c-5.3 5.3-5.3 13.8 0 19.1l301.5 290.3c5.3 5.3 13.8 5.3 19.1 0l41.4-41.4z" /> */}
              {/* </svg> */}
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"> */}
              {/*   <path d="M118.82 118.82 10 227.94l226.06 226.07 226.36 */}
              {/*     226.36h-293.1V990l409.74-.6 */}
              {/*     409.44-.9.9-409.74.6-409.44H680.37v293.1L454.01 236.06 227.94 */}
              {/*     10 118.82 118.82zM731.47 402.9V220.43H938.9l-.6 358.33-.9 */}
              {/*     358.63-358.33.9-358.63.6V731.47h365.23L333.76 479.56 82.15 */}
              {/*     227.94l72.75-73.04 73.05-72.75 251.61 251.61 251.91 */}
              {/*     251.91V402.9z" /> */}
              {/* </svg> */}

              <Link to="/about" className="js-hover">More details</Link>
            </div>
            {/* <button className="c-intro_text_button btn"><Link to="/about" className="js-hover">More details</Link></button> */}
          </h3>
          {/* <p className="test">Lorem  asldkjflksjdflkjsdklfjlksjdflkjsdkfjasdf */}
          {/*   sldfjlskdjflkjsdlkfjlksjdfkljsdlkjfklsdjf */}
          {/*   sdlkjflskdjflksjdklfjlskdjf */}
          {/*   sldkjflksjdfkk</p> */}
        </div>
      </div >

    </section >

  )
};

export default Intro;
