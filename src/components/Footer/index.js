import React from 'react';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import './style.scss';

const Footer = () => {
  const {scroll} = useLocomotiveScroll();
  const onClick = () => {
    scroll.scrollTo('top', {})
  };
  return (
    <div className="c-footer" data-scroll-section="">
      <div className="c-footer__text --left">
        <span>
          <a href="https://dribbble.com/weesnail" target="_blank" className="js-hover">dribble</a>
        </span>
        <span>
          <a href="https://github.com/thatGuyAnes" target="_blank" className="js-hover">github</a>
        </span>
        <span>
          <a href="https://twitter.com/thatguyanes" target="_blank" className="js-hover">twitter</a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/anes-marzuki-001am/" target="_blank" className="js-hover">linkedin</a>
        </span>
      </div>

      <div className="c-footer__text --right">
        <span>2021</span>
        <span>
          <button onClick={onClick} className="js-hover">back to top</button>
        </span>
      </div>
    </div>
  );
};

export default Footer;
