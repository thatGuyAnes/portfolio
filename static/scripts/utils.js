// export { lerp, getMousePos };

// Map number x from range [a, b] to [c, d]
const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;

// Linear interpolation
const lerp = (x, y, n) => (1 - n) * x + n * y;

const clamp = (num, min, max) => num <= min ? min : num >= max ? max : num;

// Gets the mouse position
const getMousePos = (mouseEvent) => {
  let posx = 0;
  let posy = 0;

  posx = mouseEvent.pageX;
  posy =  mouseEvent.clientY;

    return { x : posx, y : posy }
};

export { map, lerp, clamp, getMousePos };
