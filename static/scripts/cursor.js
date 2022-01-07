import gsap from 'gsap';
import {getMousePos, lerp} from './utils';

// Track the mouse position
let mouse = {x: 0, y: 0}; //State
window.addEventListener('mousemove', ev => mouse = getMousePos(ev));

export default class Cursor {

  constructor (el) {
    this.DOM = {el: el};
    this.DOM.el.style.opacity = 0;

    this.bounds = this.DOM.el.getBoundingClientRect();

    // Store the previous and current position of mouse.
    // amt is the the amout to interpolate between the two values.
    // where 0.0 equal to the first point, 0.1 is very near the first point, 0.5
    // is half-way in between, etc.
    this.configs = {
      x: {previous: 0, current: 0, amt: 0.2},
      y: {previous: 0, current: 0, amt: 0.2}
    };

    this.onMouseMoveEv = () => {

      // Runs once to get configs coordinates.!!!!
      console.log(this.configs.x.previous, this.configs.x.current)
      this.configs.x.previous = this.configs.x.current = mouse.x - this.bounds.width / 2;
      this.configs.y.previous = this.configs.y.previous = mouse.y - this.bounds.height / 2;

      gsap.to(this.DOM.el, {duration: 0.9, ease: 'Power3.easeOut', opacity: 1});

      requestAnimationFrame(() => this.render());

      // Cleanup function. removes eventListener after one cycle.
      window.removeEventListener('mousemove', this.onMouseMoveEv);

    };

    // Assign the mouse function...
    window.addEventListener('mousemove', this.onMouseMoveEv);
  } // </Constructor>

  render() {
    // setting the current mouse position.
    this.configs['x'].current = mouse.x - this.bounds.width / 2;
    this.configs['y'].current = mouse.y - this.bounds.height / 2;

    for (const key in this.configs) {
      // lerp will return a value between the previous state and the current state...
      this.configs[key].previous = lerp(this.configs[key].previous, this.configs[key].current, this.configs[key].amt);
    }
    // Assigning the cursor's x and y to the HTML cursor element.
    this.DOM.el.style.transform = `translateX(${(this.configs['x'].previous)}px) translateY(${this.configs['y'].previous}px)`;
    requestAnimationFrame(() => this.render());
  }
}
