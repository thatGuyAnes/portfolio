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

const Webfolio = () => {
  // const headerRef = useRef(null);
  const infoRef = useRef();
  const rootRef = useRef();
  const staticMaskRef = useRef();
  const tl = useRef(gsap.timeline());
  const [header, headerRef] = useUpdateHeader();

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
    if (header) {
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
    }
  }, [header]);

  return (
    <Layout>
      <main
        className="c-project-container o-container"
        data-scroll-section=""
        ref={rootRef}
      >
        <div className="c-project__header" ref={headerRef}>
          <div className="c-static-mask" ref={staticMaskRef}>
            <StaticImage
              src="../../images/webfolio.png"
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
            <h1>Webfolio</h1>
          </div>
          <div className="c-project__info__tech-list">
            <span className="c-info__tech">GSAP</span>
            <span className="c-info__tech">Gatsbyjs</span>
            <span className="c-info__tech">Locomotive Scroll</span>
            <span className="c-info__tech">SCSS</span>
            <span className="c-info__tech">ITCSS</span>
            <span className="c-info__tech">react</span>
            <span className="c-info__tech">canvas</span>
            <span className="c-info__tech">javascript</span>
          </div>
          <p>
            A creative website, featuring custom designs and UI elements that
            were made in Figma and Adobe Illustrator.
          </p>
          <p>
            My personal portfolio, a multipage website and gateway to showcase my
            work, who I am and what I do.
          </p>
          <p>
            Even though it still doesn't feature a lot of projects{' '}
            <em>(and honestly I would never include tutorial projects or Netflix clones...not a big fan anyway)</em>,
            it's pretty much a work in progress that is being made with the
            secret ingredients of passion and love :).
          </p>
          <div className="c-project__info__button c-button o-button">
            <a
              href="https://www.anesmarzuki.com"
              className="js-hover"
              target="_blank"
            >
              live site
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Webfolio;
