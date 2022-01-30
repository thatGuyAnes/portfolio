import * as React from "react";
import Home from '../components/Home';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Intro from '../components/Introduction';
import Divider from '../components/Divider';
import Circle from '../components/Circle';
import Projects from '../components/Projects';

export default function IndexPage() {

  // Loading state.
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    if (document.body.classList.contains('is-ready')) setIsLoaded(true);
    // Initialize an observer to change the loading.
    const ob = new MutationObserver(() => setIsLoaded(true));
    // Observe the body for changed classes.
    ob.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"]
    });
  }, []);

  const render = () => (
    <Layout>
      <Circle />
      <Header />
      <Intro />
      <Divider />
      <Projects />
    </Layout>
  );


  return (
    <>
      {
        isLoaded ? render() : null
      }
    </>
  )
};


// import {useLocomotiveScroll} from 'react-locomotive-scroll';
// const { scroll } = useLocomotiveScroll();
// React.useEffect(() => {
//     console.log(scroll);
// }, []);
