import React from 'react';
import Header from '../Header/index'
import Introduction from '../Introduction';
import Arrow from '../Arrow';


const Home = () => {
  return (
    < main className="container" >
      <Header />
      {/* Arrow */}
      <Arrow />
      {/* <About section> */}
      <Introduction />
    </main >
  )
};

export default Home;

