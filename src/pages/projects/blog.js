import React, {
  useEffect,
  useRef,
  useCallback,
  useState,
} from 'react';
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

const Blog = () => {
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
              src="../../images/blog.png"
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
            <h1>Personal Blog</h1>
          </div>
          <div className="c-project__info__tech-list">
            <span className="c-info__tech">JAM Stack</span>
            <span className="c-info__tech">SSG</span>
            <span className="c-info__tech">Gatsby</span>
            <span className="c-info__tech">Styled Components</span>
            <span className="c-info__tech">SCSS</span>
            <span className="c-info__tech">Bulma</span>
            <span className="c-info__tech">React</span>
            <span className="c-info__tech">GraphQl</span>
            <span className="c-info__tech">prismjs</span>
            <span className="c-info__tech">gitalk</span>
            <span className="c-info__tech">UI themes</span>
          </div>
          <p>
            A personal blog that I made from gatsby files where I post about
            things I've learned and stuff that I need to write about for better
            retentin.
          </p>
          <p>
            The website serves as a digital playground, where I test and try
            different solutions and libraries to help me learn and practice
            working with Gatsbyjs and its ecosystem.
          </p>
          <div className="c-project__info__button c-button o-button">
            <a href="https://blog.anesmarzuki.com/"
              className="js-hover"
              target="_blank"
            >
            link
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Blog;
