import React, {Component} from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
  render() {
    return (
        <div>
          First React Component!!
        </div>
    );
  }
}

export default hot(module)(App);
