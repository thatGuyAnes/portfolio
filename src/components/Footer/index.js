import React from 'react';
import { Link } from 'gatsby';
import { useLocomotiveScroll } from 'react-locomotive-scroll';
import './style.scss';

const Footer = () => {
  const {scroll} = useLocomotiveScroll();
  const onClick = () => {
    scroll.scrollTo('top', {})
  };
  return (
    <div className="c-footer o-container" data-scroll-section="">
      <div className="c-footer__text --left">
        <span>
          <Link to="#" className="js-hover">dribble</Link>
        </span>
        <span>
          <Link to="#" className="js-hover">github</Link>
        </span>
        <span>
          <Link to="#" className="js-hover">twitter</Link>
        </span>
        <span>
          <Link to="#" className="js-hover">linkedin</Link>
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
