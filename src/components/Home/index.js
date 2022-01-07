import React from 'react';
import Header from '../Header/index'
import Introduction from '../Introduction';
import Projects from '../Projects/';
import Arrow from '../Arrow';


const Home = () => {
  return (
    < main className="container" >
      {/* <Arrow /> */}
      <Header />
      {/* Arrow */}
      {/* <About section> */}
      <Introduction />
      {/* Project section */}
      <Projects />
    </main >
  )
};

export default Home;

