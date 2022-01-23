import React, {useEffect, useRef} from 'react';
import {Link} from 'gatsby';
import gsap from 'gsap';

import './style.scss';

const ProjectsListItem = ({project}) => {

  const {title, href} = project;

  const maskedRef = useRef();
  const linkRef = useRef();
  const sliderWrapperRef = useRef();
  const sliderRef = useRef();


  // Handlers.
  const onMouseEnterLink = () => (maskedRef.current.classList.toggle('unmasked'));
  const onMouseLeaveLink = () => (maskedRef.current.classList.toggle('unmasked'));

  useEffect(() => {
    /* we want similar behavior to the CSS ':hover' pseudo-class, we'll be using
    'mouseenter' + 'mouseleave' instead of 'mouseover' for a better performace */
    linkRef.current.addEventListener('mouseenter', onMouseEnterLink)
    linkRef.current.addEventListener('mouseleave', onMouseLeaveLink)
  }, []);

  return (
    <li className="c-projects-list_item">
      <Link to={href} className="c-projects-list_item_link hoverable" ref={linkRef}>

        <span className="c-item-link_label --outlined">
          {title}
        </span>

        <span className="c-item-link_label --masked" ref={maskedRef}>
          <span className="c-item-link_label_slider-wrapper" ref={sliderWrapperRef}>
            <span className="c-item-link_label_slider" ref={sliderRef}>
              {title}
            </span>
          </span>
        </span>

      </Link>
    </li>
  )
};
export default ProjectsListItem;


