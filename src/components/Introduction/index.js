import React, { useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import gsap from 'gsap/all';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Sphere from '../Sphere';
import Junior from '../svgs/Junior-svg';
import StarLeft from '../svgs/StarLeft-svg';
import StarRight from '../svgs/StarRight-svg';
import Underline from '../svgs/Underline-svg';
import './style.scss';

// Splitting
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';

const Intro = () => {
  gsap.registerPlugin(ScrollTrigger);
  const { scroll } = useLocomotiveScroll();

  const introRef = useRef();
  const introMainRef = useRef();
  const introTextH3Ref = useRef();
  const btnRef = useRef();

  let lines = [];
  const textContainerRef = useRef();

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
      const text = el('#intro__text-header');
      const svgs = el('svg');

      // lines
      const textContainer = gsap.utils.selector(textContainerRef.current);
      lines.push(
        textContainer('#l1'),
        textContainer('#l2'),
        textContainer('#l3'),
        textContainer('#l4')
      );

    if (scroll) {
      // INTRO ANIMATIONS
      /* In order for this to work, we need to set the scroller as the locomotive
        scroll element, and to wait for the its update by adding the scroll to
        the list of dependencies.
       */
      textRevealAnimation = gsap.timeline({
        // scrollTrigger: {
        //   trigger: introMainRef.current,
        //   scroller: scroll?.el,
        //   start: 'top 60%',
        // },
      });

      ScrollTrigger.create({
        trigger: text,
        scroller: scroll?.el,
        start: 'top 60%',
        animation: textRevealAnimation,
        })

      lines.forEach((line, _index) => {
        // array of chars
        const chars = Splitting({ target: line, by: 'chars' });
        textRevealAnimation.from(
          chars[0].chars,
          { yPercent: 290, stagger: 0.03, duration: 0.2 },
          '>-80%'
        );
      });

      svgs.forEach((svg, _index) => {
        textRevealAnimation.from(svg, { autoAlpha: 0 }, '<+50%');
      });
      textRevealAnimation.from(
        btnRef.current,
        { autoAlpha: 0, duration: 1.3 },
        '>'
      );
      textRevealAnimation.from(aside, { autoAlpha: 0, duration: 0.8 }, '<-70%');
    }
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
          <h1 ref={introTextH3Ref} id="intro__text-header">
            <span className="text-container" ref={textContainerRef}>
              {/* =First line */}
              <div className="c-intro__line-wrapper">
                <span className="c-intro__text__line" id="l1">
                  I'm a{' '}
                  <span className="c-intro__special o-special-container --junior">
                    <Junior />
                    front
                  </span>
                  -end web developer
                </span>
              </div>

              {/* =Second line */}
              <div className="c-intro__line-wrapper">
                <span className="c-intro__text__line" id="l2">
                  and a UI designer from Tunisia
                </span>
              </div>

              {/* =Third line */}
              <div className="c-intro__line-wrapper">
                <span className="c-intro__text__line" id="l3">
                  with a{' '}
                  <span className="c-intro__special o-special-container --passion">
                    <StarLeft className="c-star star-l" />
                    <Underline />
                    passion
                    <StarRight className="c-star star-r" />
                  </span>{' '}
                  for interactive{' '}
                </span>
              </div>

              {/* =Fourth line */}
              <div className="c-intro__line-wrapper">
                <span className="c-intro__text__line" id="l4">
                  designs and web technologies.
                </span>
              </div>
            </span>

            <div
              className="c-intro__link-wrapper c-button o-button"
              ref={btnRef}
            >
              <Link to="/about" className="js-hover">
                More details
              </Link>
            </div>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Intro;
