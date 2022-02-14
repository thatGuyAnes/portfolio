import React, { useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import gsap from 'gsap';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Sphere from '../Sphere';
import Junior from '../svgs/Junior-svg';
import StarLeft from '../svgs/StarLeft-svg';
import StarRight from '../svgs/StarRight-svg';
import Underline from '../svgs/Underline-svg';
import './style.scss';

const Intro = () => {
  const { scroll } = useLocomotiveScroll();
  gsap.registerPlugin(ScrollTrigger);
  const introRef = useRef();
  const introMainRef = useRef();
  const introTextH3Ref = useRef();

  /*We want to position the h3 to the right without the use of absolute positioning
  nor a flex container*/
  /*
  const onResize = () => {
    const sectionBounds = introRef.current.getBoundingClientRect();
    const h3Bounds = introTextH3Ref.current.getBoundingClientRect();

    // get the distance between h3 and righ of section.
    // section.right - h3.width
    const distance = sectionBounds.width - h3Bounds.width;

    // translate h3 to the right by the calculated distance.
    gsap.to(introTextH3Ref.current, { x: distance });
  };
  */

  useEffect(() => {
    let textRevealAnimation;
    const el = gsap.utils.selector(introMainRef.current);
    const aside = el('aside');
    const text = el('h3');
    if (scroll) {
      /* In order for this to work, we need to set the scroller as the locomotive
        scroll element, and to wait for the its update by adding the scroll to
        the list of dependencies.
       */
      textRevealAnimation = gsap.timeline({
        scrollTrigger: {
          scroller: scroll?.el,
          trigger: introMainRef.current,
          start: 'top 70%',
        },
      });

      textRevealAnimation
        .from(aside, { duration: 1, opacity: 0, yPercent: -20 })
        .from(text, { duration: 1.3, opacity: 0, yPercent: 40 }, '<0.3');
    }
    // onResize();
    // window.addEventListener('resize', onResize);
    // return () => {
    // window.removeEventListener('resize', onResize);
    // };
    return () => {
      textRevealAnimation ? textRevealAnimation.kill() : null;
    };
  }, [scroll]);

  return (
    <section
      className="c-intro o-container"
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

      <div className="c-intro__main" ref={introMainRef}>
        <aside
          className="c-intro__canvas-container"
          data-scroll=""
          data-scroll-speed={1}
          data-scroll-delay="0.09"
          data-scroll-repeat="true"
          data-scroll-position="top"
        >
          <Sphere />
        </aside>

        <div
          className="c-intro__text"
          data-scroll=""
          data-scroll-speed={1}
          data-scroll-position="top"
        >
          {/* <p>Who What Where ??</p> */}
          <h3 ref={introTextH3Ref}>
            <span className="text-wrapper">
            Anes is a{' '}
            <span className="c-intro__special o-special-container --junior">
              <Junior />
              front
            </span>
            -end web designer and Javascript developer from Tunisia with a
            <span className="c-intro__special o-special-container --passion">
              <StarLeft className="c-star star-l" />
              <Underline />
              passion
              <StarRight className="c-star star-r" />
            </span>{' '}
            for interactive design and web technologies.
            </span>
            <div className="c-intro__link-wrapper c-button o-button">
              <Link to="#" className="js-hover">
                More details
              </Link>
            </div>
            {/* <button className="c-intro_text_button btn"><Link to="/about" className="js-hover">More details</Link></button> */}
          </h3>
          {/* <p className="test">Lorem  asldkjflksjdflkjsdklfjlksjdflkjsdkfjasdf */}
          {/*   sldfjlskdjflkjsdlkfjlksjdfkljsdlkjfklsdjf */}
          {/*   sdlkjflskdjflksjdklfjlskdjf */}
          {/*   sldkjflksjdfkk</p> */}
        </div>
      </div>
    </section>
  );
};

export default Intro;
