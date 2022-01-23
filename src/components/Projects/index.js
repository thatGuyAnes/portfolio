import React from 'react';
import ProjectsList from '../ProjectsList';

import './style.scss';

const Projects = () => {

  return (
    <section
      data-scroll-section=""
      className="projects"
    >
      <div className="c-projects_banner" id="banner">
        <div className="c-projects_banner_marquee -top">
          <span className="c-projects_banner_marquee_inner"
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

        <div className="c-projects_banner_marquee -bottom">
          <span className="c-projects_banner_marquee_inner"
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
      {/* List of projects */}
      <ProjectsList />
    </section>
  )
};

export default Projects;


