/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import greeting from '../../HOC/greeting';

class Authors extends Component {
  render() {
    return <div>{this.props.name}</div>;
  }
}

Authors.propTypes = {};

export default greeting(Authors);
