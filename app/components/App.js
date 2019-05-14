import React from 'react';
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { data } from '../../server/testData';
import DataApi from '../../server/DataApi';

import DoctorsList from './DoctorsList';

const doctors = new DataApi(data);

const dataList = doctors.getList();

class App extends React.PureComponent {
  render() {
    return (
        <div>
          <DoctorsList data = {dataList} />
        </div>
    );
  }
}

export default hot(module)(App);
