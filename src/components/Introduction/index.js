import React from 'react';
import './style.scss';

const Intro = () => {
  return (
        <section className="intro">
          <h2 className="intro__title">
            <span></span>
          </h2>
          <div className="intro__image"></div>
          <div className="intro__text">
            <p>About</p>
            <h3>Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Quisque at porta sapien, eget posuere
              turpis. Vivamus sollicitudin tempor ex et efficitur. Etiam
              vitae elementum ex. Etiam scelerisque enim ante, eget
              condimentum felis gravida vitae. Integer vel placerat enim.
              Nulla tincidunt congue consequat. Interdum et malesuada
              fames ac ante ipsum primis in faucibus.</h3>
          </div>
          <div className="intro__button"></div>
        </section>
  )
};

export default Intro;
