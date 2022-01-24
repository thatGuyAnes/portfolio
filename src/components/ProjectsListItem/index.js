import React, {useEffect, useRef} from 'react';
import {Link} from 'gatsby';
import gsap from 'gsap';
import {map, lerp, clamp, getMousePos} from '../../../static/scripts/utils';

import './style.scss';
import image from '../../images/ff1.png';

// track the mouse position
let mousepos = {x: 0, y: 0};
// cache the mouse position
let mousePosCache = mousepos;
let direction = {
  x: mousePosCache.x - mousepos.x,
  y: mousePosCache.y - mousepos.y
};


// 'animatableProperties': menu item properties that will animate as we move the mouse around the menu
// we will be using interpolation to achieve smooth animations. 
// the “previous” and “current” values are the values to interpolate. 

// the value applied to the element; in this case the image element(this.DOM.reveal)
// will be a value between these two values at a specific increment.
// the amt is the amount to interpolate.
const animatableProperties = {
  // translationX
  tx: {previous: 0, current: 0, amt: 0.08},
  // translationY
  ty: {previous: 0, current: 0, amt: 0.08},
  // Rotation angle
  rotation: {previous: 0, current: 0, amt: 0.08},
  // CSS filter (brightness) value
  brightness: {previous: 1, current: 1, amt: 0.08}
};

const ProjectsListItem = ({project}) => {

  const {title, href} = project;

  const maskedRef = useRef();
  const linkRef = useRef();
  const sliderWrapperRef = useRef();
  const sliderRef = useRef();

  // ==================imageHover


  // create the image structure
  // we want to add/append to the menu item the following html:
  // <div class="hover-reveal">
  //   <div class="hover-reveal__inner" style="overflow: hidden;">
  //     <div class="hover-reveal__img" style="background-image: url(pathToImage);">
  //     </div>
  //   </div>
  // </div>
  const layout = () => {
    // this is the element that gets its position animated 
    // (and perhaps other properties like the rotation etc..)
    let reveal = document.createElement('div');
    reveal.className = 'hover-reveal';

    // the next two elements could actually be only one, the image element
    // adding an extra wrapper (revealInner) around the image element with
    // overflow hidden, gives us the possibility to scale the image inside.
    let revealInner = document.createElement('div');
    revealInner.className = 'hover-reveal__inner';
    let revealImage = document.createElement('div');
    revealImage.className = 'hover-reveal__img';
    revealImage.style.backgroundImage = `url(${image})`;

    revealInner.appendChild(revealImage);
    reveal.appendChild(revealInner);
    linkRef.current.appendChild(reveal);
  };

  useEffect(() => {
    // update mouse position when moving the mouse
    window.addEventListener('mousemove', ev => mousepos = getMousePos(ev));
    layout();
  }, []);


  // =============================/End imageHover



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
      <Link to={href} className="c-projects-list_item_link js-hover" ref={linkRef}>

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


