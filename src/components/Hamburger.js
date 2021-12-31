import React from 'react';

const Hamburger = ({menuState, setMenuState}) => {

  const handleClick = () => {
    setMenuState(!menuState);
  };

  return (
    <>
      <button onClick={handleClick}>{`state is ${menuState}`}</button>
    </>
  )

};

export default Hamburger;
