import React from 'react';

const Loader = ({setIsLoaded}) => {

  React.useLayoutEffect(() => {
    initLoader();
  }, []);

  const initLoader = () => {
    setTimeout(() => {
      document.body.classList.remove('loading');
      setIsLoaded(true);
    }, 2000)
  };

  return (
    <div className='loader'></div>
  )
};

export default Loader;
