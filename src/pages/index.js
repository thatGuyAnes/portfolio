import * as React from "react";
import Home from '../components/Home';
import Loader from '../components/Loader'

const IndexPage = () => {

  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useLayoutEffect(() => {
    document.body.classList.add('loading')
  }, []);

  // function removeLoad() {
  //   setTimeout(() => {
  //     document.body.classList.remove('loading');
  //     setLoaded(true);
  //   }, 2000)
  // }

  return (
    <>
      {isLoaded
        ? <Home />
        : <Loader setIsLoaded={setIsLoaded}/>}
    </>
  )
};

export default IndexPage;
