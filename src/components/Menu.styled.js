import styled from 'styled-components';

export const StyledMenu = styled.nav`
display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
  width: 100px;
  height: 100px;
  background-color: red;
`
