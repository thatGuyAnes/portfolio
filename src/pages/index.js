import * as React from "react";
import Layout from '../components/Layout';
import Header from '../components/Header';
import Intro from '../components/Introduction';
import Divider from '../components/Divider';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const IndexPage = () => {

  // Loading state.
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    if (document.body.classList.contains('is-ready')) {
      setIsLoaded(true);
      document.body.id = 'isBrowser'
    }
    // Initialize an observer to change the loading.
    const ob = new MutationObserver(() => {
      setIsLoaded(true);
    });
    // Observe the body for changed classes.
    ob.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"]
    });
  }, []);

  const render = () => (
    <Layout>
      <Header />
      <Intro />
      <Divider />
      <Projects />
      <Contact />
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

export default IndexPage;
