import React, {useEffect, useRef, useCallback} from 'react';
import gsap from 'gsap';

import './style.scss';

// Linear interpolation
const lerp = (x, y, n) => (1 - n) * x + n * y;

// Gets the mouse position
const getMousePos = (mouseEvent) => {
  let posx = 0;
  let posy = 0;

  posx = mouseEvent.pageX;
  posy =  mouseEvent.clientY;

//   if (!mouseEvent) mouseEvent = window.event;
// 
//   if (mouseEvent.pageX || mouseEvent.pageY) {
//         posx = mouseEvent.pageX;
//         posy = mouseEvent.pageY;
//   }
//   else if (mouseEvent.clientX || mouseEvent.clientY) {
//         posx = mouseEvent.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
//         posy = mouseEvent.clientY + document.body.scrollTop + document.documentElement.scrollTop;
//     }

    return { x : posx, y : posy }
};


const initConfig = {
  x: {
    previous: 0,
    current: 0,
    amt: 0.1
  },
  y: {
    previous: 0,
    current: 0,
    amt: 0.1
  }
};


const Cursor = () => {

  const mouse = useRef({x: 0, y: 0});
  const configs = useRef(initConfig);

  const requestRef = useRef(null);

  const cursorRef = useRef();
  const bounds = useRef(null);

  // Get mouse position;
  const windowMouseMoveHandler = (e) => {
    mouse.current = getMousePos(e);
    gsap.to(cursorRef.current, {autoAlpha: 1, duration: 2});
      // console.log(mouse.current.y - 40)
    };


  const animateCursor = useCallback(() => {

    configs.current['x'].current = mouse.current.x - bounds.current.width / 2;
    configs.current['y'].current = mouse.current.y - bounds.current.height / 2;

    for (const key in configs.current) {
      configs.current[key].previous = lerp(configs.current[key].previous, configs.current[key].current, configs.current[key].amt);
      // configs.current[key].previous = configs.current[key].current;
    }

    // Assigning the cursor's x and y to the HTML cursor element.
    cursorRef.current.style.transform = `translateX(${(configs.current['x'].previous)}px) translateY(${configs.current['y'].previous}px)`;

    // cursorRef.current.style.top = `${configs.current['y'].previous}px`
    // cursorRef.current.style.left = `${configs.current['x'].previous}px`

    requestRef.current = requestAnimationFrame(() => animateCursor());
    // requestAnimationFrame(() => animateCursor());
  }, []);

  const onMouseMoveEv = useCallback(() => {

    configs.current.x.previous = configs.current.x.current = mouse.current.x - bounds.current.width / 2;
    configs.current.y.previous = configs.current.y.previous = mouse.current.y - bounds.current.height / 2;
    // requestRef.current = requestAnimationFrame(() => animateCursor());

    requestRef.current = requestAnimationFrame(() => animateCursor());
    // requestAnimationFrame(() => animateCursor());

    window.removeEventListener('mousemove', onMouseMoveEv);
  }, [animateCursor]);



  useEffect(() => {
    bounds.current = cursorRef.current.getBoundingClientRect();
    window.addEventListener('mousemove', onMouseMoveEv);
    return () => {
      window.removeEventListener('mousemove', onMouseMoveEv);
      cancelAnimationFrame(requestRef.current);
    }
  }, [onMouseMoveEv]);


  // we want to listen for the mouse mvt all the time.
  useEffect(() => {
    window.addEventListener('mousemove', windowMouseMoveHandler);
    return () => {
      window.removeEventListener('mousemove', windowMouseMoveHandler);
    }
  }, []);

  return (
      <div ref={cursorRef} className="cursor">
        <div className="cursor_inner"></div>
      </div>
  )
};

export default Cursor;
