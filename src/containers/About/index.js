/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import greeting from '../../HOC/greeting';

class About extends Component {
  render() {
    return <div>{this.props.name}</div>;
  }
}

About.propTypes = {};

export default greeting(About);
