import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

class DoctorsList extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <span>Name</span>
        <ul>
          {this.props.data.map(doctor =>
            <React.Fragment key={doctor.id}>
              <li>{doctor.name}</li>
            </React.Fragment>
          )}
        </ul>
      </React.Fragment>
    );
  }
}

DoctorsList.propTypes = {
  data: PropTypes.array.isRequired
};

export default hot(module)(DoctorsList);
