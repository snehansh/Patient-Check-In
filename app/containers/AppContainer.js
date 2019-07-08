import React  from 'react';
import App from '../components/App';
import { hot } from 'react-hot-loader';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    doctors: state.doctors,
  };
};

class AppContainer extends React.PureComponent {
  render() {
    return (
      <App doctors={this.props.doctors} />
    );
  }
}

export default hot(module)(connect(mapStateToProps)(AppContainer));
