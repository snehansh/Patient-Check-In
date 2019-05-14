import React  from 'react';
import App from '../components/App';
import { hot } from 'react-hot-loader';

class AppContainer extends React.PureComponent {
  render() {
    return (
      <App />
    );
  }
}

export default hot(module)(AppContainer);
