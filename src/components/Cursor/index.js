import React from 'react';


const mouseReducer = (state, {x, y}) => {


  return {...state, x: x, y: y}
};

const initConfig = {
  x: {
    previous: 0,
    current: 0,
    amt: 0.2
  },
  y: {
    previous: 0,
    current: 0,
    amt: 0.2
  }
};

// Linear interpolation

const cursorConfigReducer = (state, {mouse, cursorBounds}) => {

  const lerp = (x, y, n) => (1 - n) * x + n * y;
  // state.x.previous, ...
  // let previousX = state.x.current;
  // let previousY = state.y.current;

  // console.log(state.x.previous, state.x.current, state.x.amt)
  let previousX = lerp(state.x.previous, state.x.current, state.x.amt);
  let previousY = lerp(state.y.previous, state.y.current, state.y.amt);

  let currentX = mouse.x - cursorBounds.width / 2;
  let currentY = mouse.y - cursorBounds.height / 2;

  return {
    ...state,
    x: {
      previous: previousX,
      current: currentX,
      amt: state.x.amt
    },
    y: {
      previous: previousY,
      current: currentY,
      amt: state.y.amt
    }
  }
};

const Cursor = () => {

  // Tracking the mouse position.
  const [mouse, setMouse] = React.useReducer(mouseReducer, {x: 0, y: 0});
  const [cursorConfig, setCursorConfig] = React.useReducer(cursorConfigReducer, initConfig);

  const cursorRef = React.useRef();
  let cursorBounds;

  // mousemove handler.
  const onMouseMove = (mouseEvt) => {
    // pass the x and y values to the dispatch function.
    let posx = 0;
    let posy = 0;

    if (!mouseEvt) mouseEvt = window.event;
    if (mouseEvt.pageX || mouseEvt.pageY) {
      posx = mouseEvt.pageX;
      posy = mouseEvt.pageY;
    } else if (mouseEvt.clientX || mouseEvt.clientY) {
      posx = mouseEvt.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      posy = mouseEvt.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }
    setMouse({x: posx, y: posy});
  };


  // For mouse coordinates.
  React.useEffect(() => {
    window.addEventListener('mousemove', (event) => onMouseMove(event));
    return () => {
      console.log('unmounting')
      window.removeEventListener();
}   }, []);


  // For  cursor coordinates.
  React.useEffect(() => {
    cursorBounds = cursorRef.current.getBoundingClientRect();
    setCursorConfig({mouse, cursorBounds});
    requestAnimationFrame(() => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translateX(${cursorConfig['x'].previous}px) translateY(${cursorConfig['y'].previous}px)`
      }
    });
  }, [mouse])

  return (
    <svg ref={cursorRef} className="cursor" width="80" height="80" viewBox="0 0 80 80">
      <circle className="cursor__inner" cx="40" cy="40" r="20" />
    </svg>
  )
};

export default Cursor;
