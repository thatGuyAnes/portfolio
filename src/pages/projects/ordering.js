import React, {
  useEffect, useRef, useCallback, useState,
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

function CallbackComponent() {
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
  }, [isLoaded]); */

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
        '<',
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
            src="../../images/order_app.png"
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
          <h1>Full-Stack Nextjs app</h1>
        </div>
        <div className="c-project__info__tech-list">
          <span className="c-info__tech">Javascript</span>
          <span className="c-info__tech">NextJs</span>
          <span className="c-info__tech">Cloudinary</span>
          <span className="c-info__tech">SCSS</span>
          <span className="c-info__tech">Paypal</span>
          <span className="c-info__tech">Redux</span>
          <span className="c-info__tech">MongoDB</span>
          <span className="c-info__tech">CRUD</span>
        </div>
        <p>
          A full-stack CRUD application for managing and purchasing products online.
        </p>
        <p>
          This application served as a companion boilerlate to learn NextJs features.
        </p>
        <ul className="c-project__info__list">
          <li className="c-info__list__item">Admin authorization and authentication</li>
          <li className="c-info__list__item">Paypal payment integration</li>
          <li className="c-info__list__item">Items in shopping cart are managed by Redux</li>
          <li className="c-info__list__item">Create, Update, Delete and Read Products from MongoDB</li>
          <li className="c-info__list__item">Images retreived and uploaded to Cloudinary</li>
        </ul>
        <div className="c-project__info__button c-button o-button">
          <a
            href="https://github.com/thatGuyAnes/Nextjs-product-ordering-application"
            className="js-hover"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </main>
  );
}

function Ordering() {
  return (
    <Layout>
      <CallbackComponent />
    </Layout>
  );
}

export default Ordering;
