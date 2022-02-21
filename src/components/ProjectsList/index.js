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
    display: 'landscape',
  },
  {
    title: 'Blog',
    href: '/projects/blog',
    imageSrc: blogImage,
    display: 'portrait',
  },
  {
    title: 'Udacity',
    href: '/projects/udacity',
    imageSrc: udacity,
    display: 'landscape',
  },
];

const ProjectsList = () => {
  return (
    <div className="c-projects-list-container o-container" data-scroll="">
      <ul className="c-projects-list" role="list">
        {links.map((project, index) => (
          <ProjectsListItem project={project} key={index} />
        ))}
        <div className="c-projects-list__button c-button o-button">
          <Link to="/projects" className="js-hover">
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> */}
            {/*   <path d="m12.707 7.293-1.414 1.414L15.586 13H7V4H5v11h10.586l-4.293 4.293 1.414 1.414L19.414 14l-6.707-6.707z" /> */}
            {/* </svg> */}
            More Projects
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default ProjectsList;
