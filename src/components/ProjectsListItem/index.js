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

let bounds = {};


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

  const {title, href, imageSrc, display} = project;

  const maskedRef = useRef();
  const linkRef = useRef();
  const sliderWrapperRef = useRef();
  const sliderRef = useRef();



  const hoverRevealRef = useRef();
  const hoverReveal_innerRef = useRef();
  const hoverReveal_imgRef = useRef();

  // ==================imageHover

  const requestId = useRef(null);
  let firstRAFCycle;

  // show the image element
  const showImage = () => {
    // kill any current tweens
    gsap.killTweensOf(hoverReveal_innerRef.current);
    gsap.killTweensOf(hoverRevealRef.current);

    const tl = gsap.timeline({
      onStart: () => {
        // show the image element
        hoverRevealRef.current.style.opacity = 1;
        // set a high z-index value so image appears on top of other elements
        gsap.set(linkRef.current, {zIndex: 1});
      }
    })
      // animate the image wrap
      .to(hoverReveal_innerRef.current, 0.2, {
        ease: 'Sine.easeOut',
        startAt: {x: direction.x < 0 ? '-100%' : '100%'},
        x: '0%'
      })
      // animate the image element
      .to(hoverReveal_imgRef.current, 0.2, {
        ease: 'Sine.easeOut',
        startAt: {x: direction.x < 0 ? '100%' : '-100%'},
        x: '0%'
      }, 0);
  };


  // hide the image element
  const hideImage = () => {
    // kill any current tweens
    gsap.killTweensOf(hoverReveal_innerRef.current);
    gsap.killTweensOf(hoverReveal_imgRef.current);

    const tl = gsap.timeline({
      onStart: () => {
        gsap.set(linkRef.current, {zIndex: 1});
      },
      onComplete: () => {
        gsap.set(hoverRevealRef.current, {opacity: 0});
      }
    })
      .to(hoverReveal_innerRef.current, 0.2, {
        ease: 'Sine.easeOut',
        x: direction.x < 0 ? '100%' : '-100%'
      })
      .to(hoverReveal_imgRef.current, 0.2, {
        ease: 'Sine.easeOut',
        x: direction.x < 0 ? '-100%' : '100%'
      }, 0);
  };

  // start the render loop animation (rAF)
  const loopRender = () => {
    if (!requestId.current) {
      requestId.current = requestAnimationFrame(() => render());
    }
  }
  // stop the render loop animation (rAF)
  const stopRendering = () => {
    if (requestId.current) {
      window.cancelAnimationFrame(requestId.current);
      requestId.current = undefined;
    }
  };


  // calculate the position/size of both the menu item and reveal element
  const calcBounds = () => {
    bounds = {
      el: linkRef.current.getBoundingClientRect(),
      reveal: hoverRevealRef.current.getBoundingClientRect()
    };
  };


  // bind some events
  const initEvents = () => {
    const mouseenterFn = (ev) => {
      // show the image element
      showImage();
      firstRAFCycle = true;
      // start the render loop animation (rAF)
      loopRender();
    };
    const mouseleaveFn = () => {
      // stop the render loop animation (rAF)
      stopRendering();
      // hide the image element
      hideImage();
    };


    // set images ratio.
    // const hoverRevealWidth = hoverRevealRef.current.getBoundingClientRect().width;
    // if (display === 'landscape') {
    //   console.log(hoverRevealWidth)
    //   hoverRevealRef.current.style.paddingBottom = `${(9 / 16) * hoverRevealWidth}px`;
    // } else if (display === 'portrait') {
    //   hoverRevealRef.current.style.paddingBottom = `${(16 / 9) * hoverRevealWidth}px`;
    // }


    // set images sizes;
    // const hoverRevealWidth = hoverRevealRef.current.getBoundingClientRect().width;
    if (display === 'landscape') {
      hoverRevealRef.current.style.width = `35vw`;
      hoverRevealRef.current.style.height = `20vw`;
    } else if (display === 'portrait') {
      hoverRevealRef.current.style.width = `25vw`;
      hoverRevealRef.current.style.height = `35vw`;
    }

    linkRef.current.addEventListener('mouseenter', mouseenterFn);
    linkRef.current.addEventListener('mouseleave', mouseleaveFn);
  };


  // translate the item as the mouse moves
  const render = () => {
    requestId.current = undefined;
    // calculate position/sizes the first time
    if (firstRAFCycle) {
      calcBounds();
    }

    // calculate the mouse distance (current vs previous cycle)
    const mouseDistanceX = clamp(Math.abs(mousePosCache.x - mousepos.x), 0, 100);
    // direction where the mouse is moving
    direction = {x: mousePosCache.x - mousepos.x, y: mousePosCache.y - mousepos.y};
    // updated cache values
    mousePosCache = {x: mousepos.x, y: mousepos.y};

    // new translation values
    // the center of the image element is positioned where the mouse is
    animatableProperties.tx.current = Math.abs(mousepos.x - bounds.el.left) - bounds.reveal.width / 2;
    animatableProperties.ty.current = Math.abs(mousepos.y - bounds.el.top) - bounds.reveal.height / 2;

    // new rotation value
    animatableProperties.rotation.current = firstRAFCycle ? 0 : map(mouseDistanceX, 0, 100, 0, direction.x < 0 ? 60 : -60);

    // new filter value
    animatableProperties.brightness.current = firstRAFCycle ? 1 : map(mouseDistanceX, 0, 100, 1, 4);

    // set up the interpolated values
    // for the first cycle, both the interpolated values need to be the same so there's no "lerped" animation between the previous and current state
    animatableProperties.tx.previous =
      firstRAFCycle
        ? animatableProperties.tx.current
        : lerp(animatableProperties.tx.previous, animatableProperties.tx.current, animatableProperties.tx.amt);
    animatableProperties.ty.previous =
      firstRAFCycle
        ? animatableProperties.ty.current
        : lerp(animatableProperties.ty.previous, animatableProperties.ty.current, animatableProperties.ty.amt);
    animatableProperties.rotation.previous =
      firstRAFCycle
        ? animatableProperties.rotation.current
        : lerp(animatableProperties.rotation.previous, animatableProperties.rotation.current, animatableProperties.rotation.amt);
    animatableProperties.brightness.previous =
      firstRAFCycle
        ? animatableProperties.brightness.current
        : lerp(animatableProperties.brightness.previous, animatableProperties.brightness.current, animatableProperties.brightness.amt);

    // set styles
    gsap.set(hoverRevealRef.current, {
      x: animatableProperties.tx.previous,
      y: animatableProperties.ty.previous,
      rotation: animatableProperties.rotation.previous,
      // filter: `brightness(${animatableProperties.brightness.previous})`
    });

    // loop
    firstRAFCycle = false;
    loopRender();
  }

  useEffect(() => {
    // update mouse position when moving the mouse
    window.addEventListener('mousemove', ev => mousepos = getMousePos(ev));
    hoverReveal_imgRef.current.style.backgroundImage = `url(${imageSrc})`;
    // initialize some events
    initEvents();
    return () => {
      // remove listeners.
      // linkRef.current.removeEventListener('mouseenter', onMouseEnterLink);
      // linkRef.current.removeEventListener('mouseleave', onMouseLeaveLink);

      // Remove any animation frame & listeners!
      // linkRef.current.removeEventListener('mouseenter', mouseenterFn);
      // linkRef.current.removeEventListener('mouseleave', mouseleaveFn);
      window.removeEventListener('mousemove', ev => mousepos = getMousePos(ev));
      window.cancelAnimationFrame(requestId.current);
    }
  }, []);


  // =============================/End imageHover



  // Handlers.
  const onMouseEnterLink = () => (maskedRef.current.classList.toggle('unmasked'));
  const onMouseLeaveLink = () => (maskedRef.current.classList.toggle('unmasked'));

  useEffect(() => {
    /* we want similar behavior to the CSS ':hover' pseudo-class, we'll be using
    'mouseenter' + 'mouseleave' instead of 'mouseover' for a better performace */
    linkRef.current.addEventListener('mouseenter', onMouseEnterLink);
    linkRef.current.addEventListener('mouseleave', onMouseLeaveLink);
    return () => {
    }
  }, []);

  return (
    <li className="c-projects-list__item">
      <Link to={href} className="c-projects-list__item__link js-hover" ref={linkRef}>

        <span className="c-item-link__label --outlined">
          {title}
        </span>

        <span className="c-item-link__label --masked" ref={maskedRef}>
          <span className="c-item-link__label__slider-wrapper" ref={sliderWrapperRef}>
            <span className="c-item-link__label__slider" ref={sliderRef}>
              {title}
            </span>
          </span>
        </span>


        {/* = Image */}
        <div className="hover-reveal" ref={hoverRevealRef}>
          <div className="hover-reveal__inner" ref={hoverReveal_innerRef}>
            <div className="hover-reveal__img" ref={hoverReveal_imgRef}></div>
          </div>
        </div>

      </Link>
    </li>
  )
};
export default ProjectsListItem;


