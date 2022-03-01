import React, { useEffect, useRef, useCallback, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import gsap from 'gsap';
import Layout from '../../components/Layout';

const useUpdateHeader = () => {
  const [header, setHeader] = useState(null);
  const ref = useCallback((node) => {
    if (node !== null) {
      setHeader(node);
    }
  }, []);
  return [header, ref];
};

const CallbackComponent = () => {
  const headerRef = useRef(null);
  const infoRef = useRef();
  const staticMaskRef = useRef();

  const tl = useRef(gsap.timeline());

  const [header, rootRef] = useUpdateHeader();

  /* Fix for undefined 'ref':
  using a state to trigger a rerender!
  discarded in favor of using useCallback in a custom hook
  const [isLoaded, setIsLoaded] = useState(false);
  const rootRef = useRef();
  useEffect(() => {
    console.log('mounted');
    console.log(rootRef);
    setIsLoaded(true);
  }, [isLoaded]);*/

  // Shrink down and scale the header.
  useEffect(() => {
    const el = gsap.utils.selector(header); // Returns a selector function that's scoped to a particular Element,
    const span = el('.c-header__image__wrapper');
    const mask = el('.c-static-mask');
    tl.current
      .from(span, { scale: 1.5 })
      .to(
        mask,
        { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' },
        '<'
      )
      .to(mask, { scale: 0.99 });
  }, [header]);

  return (
    <main
      className="c-project-container o-container"
      data-scroll-section=""
      ref={rootRef}
    >
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
          The app is a hybrid between a scheduler, a weather forecast and a
          calendar.
        </p>
        <p>
          The project consists of an Express/Webpack application that makes use
          of three external APIs to ask the user for a desired location for a
          trip, saves some information about the trip and displays the weather
          forecast and an image of the destination.
        </p>
        <h2>About the Udacity program</h2>
        <p>
          After I got invited to partake in the{' '}
          <a
            className="c-project__info__extLink js-hover"
            href="https://arabcoders.ae/"
            target="_blank"
          >
            One Million Arab coders
          </a>{' '}
          initiative, I chose the Front End course by Udacity as my path.
        </p>
        <p>
          The course was divided into chapters, with each chapter ending with a
          related project with specific requirements to meet.
        </p>
        <p>
          Each of the projects was reviewed and approved by the Udacity's
          instructional team
        </p>
        <p>
          All of the projects I submitted can be found on my github (link below)
          in their original state with no refactoring done to the code so I can
          compare my progress over time.
        </p>
        <div className="c-project__info__button__wrapper">
          <span className="c-project__info__button c-button o-button">
            <a
              href="https://github.com/Udacity-Front-End-Developer"
              className="js-hover"
              target="_blank"
            >
              Github
            </a>
          </span>
        </div>

        <div className="c-project__info__button__wrapper">
          <span className="c-project__info__button c-button o-button no-link">
            <a
              href="https://github.com/Udacity-Front-End-Developer"
              target="_blank"
            >
              website
            </a>
          </span>
        </div>
      </div>
    </main>
  );
};

const Udacity = () => {
  return (
    <Layout>
      <CallbackComponent />
    </Layout>
  );
};

export default Udacity;
