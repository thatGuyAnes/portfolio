import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/Layout';
import blogImage from '../../images/blog.png';
import './blog.scss';

const Blog = () => {
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
            <img
              className="c-blog__image c-header__image js-hover"
              src={blogImage}
            />
          </div>
        </div>

        <div className="c-project__info c-blog__info" ref={infoRef}>
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
            <Link to="#" className="js-hover">
              Github
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Blog;
