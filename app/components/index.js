import React from 'react';
import ReactDOM from 'react-dom';

// import { AppContainer } from 'react-hot-loader';
import App from './App.js';

ReactDOM.render(<App />, document.getElementById('root'));

// const render = Component => {
//   ReactDOM.render(
//     <AppContainer>
//       <Component />
//     </AppContainer>,
//     document.getElementById('root')
//   );
// };

// const render = Component => {
//   ReactDOM.render(
//     <Component />,
//     document.getElementById('root')
//   );
// };
//
// render(App);
//
// if (module.hot) {
//   module.hot.accept('./App.js', () => {
//     // const NextRootContainer = require('./App.js').default;
//     // ReactDOM.render(<App />, document.getElementById('root'));
//     // render(NextRootContainer);
//
//     render(require('./components/App'));
//
//   });
// }
