import * as React from "react";
import Home from '../components/Home';

const IndexPage = () => {

  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.add('loading')
    removeLoad();
  }, []);

  function removeLoad() {
    setTimeout(() => {
      document.body.classList.remove('loading');
      setLoaded(true);
    }, 2000)
  }

  return (
    <>
      {loaded
        ? <Home />
        : null}
      </>
  )
};

export default IndexPage;
