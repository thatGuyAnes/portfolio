import React from 'react';
import {StyledMenu} from './Menu.styled';

const Menu = ({isOpen}) => {
  return (
    <StyledMenu isOpen={isOpen}>
      <h2>menu</h2>
    </StyledMenu>
  )
};

export default Menu;
