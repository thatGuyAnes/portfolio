import * as React from "react";
import Home from '../components/Home';
import Layout from '../components/Layout';

const IndexPage = () => {

  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    const ob = new MutationObserver(() => setIsLoaded(true));
    ob.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"]
    });
  });

  const render = () => {
    return (
      <Layout>
        <Home />
      </Layout>
    )
  };

  return (
    <>
      {isLoaded
        ? render()
        : null}
    </>
  )
};

export default IndexPage;
