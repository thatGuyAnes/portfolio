import React from 'react';
import {Link} from 'gatsby';

import './style.scss';

const Navbar = ({children}) => {
  return (
    <>
      <div className="brand">
        <span className="brand__img"></span>
        <span className="brand__text">
          <Link to="/">anes marzuki</Link>
        </span>
      </div>

      <div className="burger">
        <button className="burger__open">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className="main-nav">
        <ul>
          <li><a href="#0">Home</a></li>
          <li><a href="#0">About</a></li>
          <li><a href="#0">Projects</a></li>
          <li><a href="#0">Blog</a></li>
          <li><a href="#0">Contact</a></li>
        </ul>
      </nav>

    </>
  )
};

export default Navbar;
