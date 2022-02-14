import React, {
  useEffect,
  useRef,
  useLayoutEffect,
  useCallback,
  useMemo,
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
};

const Docunotes = () => {
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
    <Layout>
      <main
        className="c-project-container o-container"
        data-scroll-section=""
        ref={rootRef}
      >
        <div className="c-project__header" ref={headerRef}>
          <div className="c-static-mask" ref={staticMaskRef}>
            <StaticImage
              src="../../images/docu.png"
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
            <h1>Docunotes</h1>
          </div>
          <div className="c-project__info__tech-list">
            <span className="c-info__tech">Javascript</span>
            <span className="c-info__tech">Docusaurus</span>
            <span className="c-info__tech">GitHub Pages</span>
            <span className="c-info__tech">CSS</span>
            <span className="c-info__tech">React</span>
            <span className="c-info__tech">babel</span>
          </div>
          <p>Docunotes is a static website generated by Docusaurus.</p>
          <p>
            The website is a hub for documenting notes and snippets, powered by
            React and deployed to GitHub pages for easy access.
          </p>
          <p></p>
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

export default Docunotes;
