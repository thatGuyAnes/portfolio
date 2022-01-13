import * as React from "react";
import Home from '../components/Home';
import Layout from '../components/Layout';


export default function IndexPage() {

  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {

    const ob = new MutationObserver(() => setIsLoaded(true));

    ob.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"]
    });
    return () => {
      setIsLoaded(false);
    }

  }, []);

  const render = () => (
      <Layout>
        <Home />
      </Layout>
    );

  return (
    <>
      {isLoaded
        ? render()
        : null}
    </>
  )
};
