import React from 'react';
import ProjectsListItem from '../ProjectsListItem';
import { Link } from 'gatsby';

import './style.scss';
import blogImage from '../../images/blog.png';
import folio from '../../images/webfolio.png';
import udacity from '../../images/udacity2.png';

// Collections of projects.
const links = [
  {
    title: 'Webfolio',
    href: '/projects/webfolio',
    imageSrc: folio,
    display: 'landscape'
  },
  {
    title: 'Blog',
    href: '/projects/blog',
    imageSrc: blogImage,
    display: 'portrait'
  },
  {
    title: 'Udacity',
    href: '/projects/udacity',
    imageSrc: udacity,
    display: 'landscape'
  },
];

const ProjectsList = () => {
  return (
    <div className="c-projects-list-container o-container"
      data-scroll=""
    >
      <ul className="c-projects-list" role="list">
        {
          links.map((project, index) => (
            <ProjectsListItem project={project} key={index} />
          ))
        }
        <div className="c-projects-list__button c-button o-button">
        <Link to="/projects">
        More Projects
        </Link>
        </div>
      </ul>
    </div>
  )
};

export default ProjectsList;
