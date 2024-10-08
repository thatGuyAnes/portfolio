import React from 'react';
import ProjectsList from '../ProjectsList';

import './style.scss';

function Projects() {
  return (
    <section
      data-scroll-section=""
      className="c-projects"
    >
      {/* List of projects */}
      <ProjectsList />
    </section>
  );
}

export default Projects;
