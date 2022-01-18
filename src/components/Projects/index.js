import React from 'react';
import './style.scss';

const Projects = () => {
  return (

    <section className="projects" data-scroll-section="">

      <div className="c-projects_banner" id="banner">

        <div className="c-projects_banner_item -top">
          <span className="c-projects_banner_item_inner"
            data-scroll=""
            data-scroll-direction="horizontal"
            data-scroll-speed={6}
            data-scroll-target="#banner"
          >
            <span>Featured Projects-</span>
            <span>Featured Projects-</span>
            <span>Featured Projects-</span>
            <span>Featured Projects-</span>
            <span>Featured Projects-</span>
          </span>
        </div>

        <div className="c-projects_banner_item -bottom">
          <span className="c-projects_banner_item_inner"
            data-scroll=""
            data-scroll-direction="horizontal"
            data-scroll-speed={8}
            data-scroll-target="#banner"
          >
            <span>Featured Projects-</span>
            <span>Featured Projects-</span>
            <span>Featured Projects-</span>
            <span>Featured Projects-</span>
            <span>Featured Projects-</span>
          </span>
        </div>

      </div>

      <div className="projects__content">
        <ul>
          <li>project one</li>
          <li>project two</li>
          <li>project three</li>
        </ul>
      </div>

      {/* <div className="project"> */}
      {/*   <span className="project__title"> */}
      {/*     Project */}
      {/*   </span> */}
      {/*   <div className="project__image"> */}
      {/*     <img /> */}
      {/*   </div> */}
      {/* </div> */}

    </section>
  )
};

export default Projects;


