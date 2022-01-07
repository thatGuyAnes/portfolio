import './src/styles/normalize.css';
import './src/styles/global.scss';
import './src/styles/loader.scss';
// import Cursor from './static/scripts/cursor';

export const onInitialClientRender = () => {
  console.log("ReactDOM.render has executed")
  // initialize custom cursor
  // const cursor = new Cursor(document.querySelector('.cursor'));
}
