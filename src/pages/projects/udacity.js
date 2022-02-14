import React, {
  useEffect,
  useRef,
  useCallback,
  useState,
} from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import gsap from 'gsap';
import { Link } from 'gatsby';
import Layout from '../../components/Layout';

const useUpdateHeader = () => {
  const [header, setHeader] = useState(null);
  const ref = useCallback((node) => {
    if (node !== null) {
      setHeader(node);
    }
  }, []);
  return [header, ref];
}

const Udacity = () => {

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
        .to( mask, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }, '<')
        .to( mask, { scale: 0.99});
  }, [header]);


  return (
    <React.Fragment>
      <Layout>
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
              Travel App was the last project I submited before the graduation
              of Udacity's Front End Developer Nanodegree.
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
    </React.Fragment>
  );
};

export default Udacity;
