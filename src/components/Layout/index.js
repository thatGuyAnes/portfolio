import React from 'react';
// import Header from '../Header/index';
import Navbar from '../Navbar/index';
import Footer from '../Footer';
import Cursor from '../Cursor';

import './style.scss';

const Layout = React.forwardRef(({children}, ref) => {

  // const [menuState, setMenuState] = React.useState(false);

  return (
    <div className="layout" ref={ref}>
      <Cursor />
      <Navbar />
      {/* <Navbar> */}
      {/*   <Hamburger menuState={menuState} setMenuState={setMenuState} /> */}
      {/*   <Menu isOpen={menuState}/> */}
      {/* </Navbar> */}
      {children}
      <Footer />
    </div>
  )

});

export default Layout;
