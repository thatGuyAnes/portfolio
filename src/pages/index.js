import * as React from "react";
import Home from '../components/Home';
import Loader from '../components/Loader'

const IndexPage = () => {

  const [isLoaded, setIsLoaded] = React.useState(false);

  // function classChanged() {
  // };

  // mutation observer.
  const ob = new MutationObserver(function () {
    setIsLoaded(true);
    // classChanged();
  });

  ob.observe(document.body, {
    attributes: true,
    attributeFilter: ["class"]
  });


  return (
    <>
      {isLoaded
        ? <Home />
        : null}
    </>

  )
};

export default IndexPage;
