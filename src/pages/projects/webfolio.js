import React, { useEffect, useRef } from 'react';
import Layout from '../../components/Layout';
import folio from '../../images/webfolio.png';
// import './webfolio.scss';

const Webfolio = () => {
  const headerRef = useRef();
  const infoRef = useRef();
  let DOM;

  const onMouseEnter = () => {
    // DOM.header.style.flex = `2`;
    DOM.header.classList.toggle('--focused');
  };

  const onMouseLeave = () => {
    // DOM.header.style.flex = `1`;
    DOM.header.classList.toggle('--focused');
  };

  const initEvents = () => {
    DOM = {
      header: headerRef.current,
      info: infoRef.current,
    };

    DOM.header.addEventListener('mouseenter', onMouseEnter);
    DOM.header.addEventListener('mouseleave', onMouseLeave);
  };

  // On hover shrink the info and expand the header.
  useEffect(() => {
    if (headerRef) {
      initEvents();
    }
  }, []);

  return (
    <Layout>
      <main className="c-project-container o-container" data-scroll-section="">
        <div className="c-project__header" ref={headerRef}>
          <div className="c-header__image__wrapper">
            <img className="c-header__image js-hover" src={folio} />
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
            <span className="c-info__tech">react</span>
            <span className="c-info__tech">canvas</span>
            <span className="c-info__tech">javascript</span>
          </div>
          <p>
            My personal portfolio multipage website, a gateway to showcase my
            work and who I am. Made with the secret ingredients of passion and
            love :).
          </p>
          <p>
            A creative website, featuring custom designs and UI elements that
            were made in Figma and Adobe Illustrator.
          </p>
        </div>
      </main>
    </Layout>
  );
};

export default Webfolio;
