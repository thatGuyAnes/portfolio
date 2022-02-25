import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <main className="c-about__main o-container">
      <div className="c-about__container">
        <span>
            <h3>Oops!!!</h3>
          <p>
            It looks like Anes is still working on this part.
          </p>
          <p>
          Meanwhile you're welcome to check his <a href="https://www.linkedin.com/in/anes-marzuki-001am/" target="_blank" className="js-hover">Linkedin</a> or his <a href="https://twitter.com/thatguyanes" target="_blank" className="js-hover">twitter</a>
          </p>
            <p className="c-about__email">anesmarzuki@gmail.com</p>
        </span>
      </div>
      </main>
    </Layout>
  )
};

export default About;
