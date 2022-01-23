import React from 'react';
import ProjectsListItem from '../ProjectsListItem';

import './style.scss';

const links = [
    {
        title: 'Project one',
        href: '/projects/project-one',
    },
    {
        title: 'Project two',
        href: '/projects/project-two',
    },
    {
        title: 'Project three',
        href: '/projects/project-three',
    },
];

const ProjectsList = () => {
    return (
        <div className="c-projects-list-container o-container"
            data-scroll=""
        >
            <ul role="list">
                {
                    links.map((project, index) => (
                        <ProjectsListItem project={project} key={index} />
                    ))
                }
            </ul>
        </div>
    )
};

export default ProjectsList;
