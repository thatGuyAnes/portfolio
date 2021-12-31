import React from 'react';
// import Header from '../Header/index';
import Navbar from '../Navbar/index';
import Footer from '../Footer';

const Layout = ({children}) => {
  const [menuState, setMenuState] = React.useState(false);
  return (
    <div>
      <Navbar />
      {/* <Navbar> */}
      {/*   <Hamburger menuState={menuState} setMenuState={setMenuState} /> */}
      {/*   <Menu isOpen={menuState}/> */}
      {/* </Navbar> */}
      {children}
      <Footer />
    </div>
  )
};

export default Layout;
