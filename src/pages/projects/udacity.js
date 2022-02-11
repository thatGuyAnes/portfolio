import React, { useEffect, useRef, useMemo, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import gsap from 'gsap';
import { Link } from 'gatsby';
import Layout from '../../components/Layout';
import udacity from '../../images/udacity2.png';

const Udacity = () => {
  const headerRef = useRef();
  const infoRef = useRef();
  const staticMaskRef = useRef();
  let DOM;

  //   const onMouseEnter = () => {
  //     // DOM.header.style.flex = `2`;
  //     DOM.header.classList.toggle('--focused');
  //   };
  //
  //   const onMouseLeave = () => {
  //     // DOM.header.style.flex = `1`;
  //     DOM.header.classList.toggle('--focused');
  //   };
  //
  //   const initEvents = () => {
  //     DOM = {
  //       header: headerRef.current,
  //       info: infoRef.current,
  //     };
  //
  //     DOM.header.addEventListener('mouseenter', onMouseEnter);
  //     DOM.header.addEventListener('mouseleave', onMouseLeave);
  //   };

  const [isLoaded, setIsLoaded] = useState(false);

  const tl = useRef(gsap.timeline());
  // Shrink down and scale the header.
  useEffect(() => {
    if (headerRef) {
      const el = gsap.utils.selector(headerRef.current); // Returns a selector function that's scoped to a particular Element,
      const span = el('.c-header__image__wrapper');
      if (span) {
        tl.current
          .from(headerRef.current, { autoAlpha: 0 })
          .from(span, { scale: 2 })
          .to(
            staticMaskRef.current,
            { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' },
            '<'
          )
          .to(
            staticMaskRef.current,
            { duration: 3, scale: 0.99, borderWidth: 2 },
            '>'
          );
      }
    }
  }, []);

  return (
    <Layout>
      <main className="c-project-container o-container" data-scroll-section="">
        <div className="c-project__header" ref={headerRef}>
          <div className="c-static-mask" ref={staticMaskRef}>
            <StaticImage
              src="../../images/udacity2.png"
              alt="project screenshot"
              as="span"
              className="c-header__image__wrapper"
              imgClassName="c-header__image"
              loading="eager"
              placeholder="none"
              imgStyle={{ opacity: 1, transform: 'none' }}
            />
          </div>
        </div>

        <div className="c-project__info" ref={infoRef}>
          <div className="c-project__info__heading">
            <h1>Travel App</h1>
          </div>
          <div className="c-project__info__tech-list">
            <span className="c-info__tech">Javascript</span>
            <span className="c-info__tech">Webpack</span>
            <span className="c-info__tech">Express</span>
            <span className="c-info__tech">SCSS</span>
            <span className="c-info__tech">jest</span>
            <span className="c-info__tech">babel</span>
            <span className="c-info__tech">service workers</span>
          </div>
          <p>
            Travel App was the last project I submited before the graduation of
            Udacity's Front End Developer Nanodegree.
          </p>
          <p>
            The project consists of an Express/Webpack application that makes
            use of three external APIs to ask the user for a desired location
            for a trip, saves some information about the trip and displays the
            weather forecast and an image of the location.
          </p>
          <div className="c-project__info__button c-button o-button">
            <Link to="#" className="js-hover">
              Github
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Udacity;
