/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToolTip from '../../components/Tooltip';
import ErrorBoundary from '../../errorBoundary';

class Home extends Component {
    
  render() {
    return <ErrorBoundary>
    <div>
    <ToolTip text="hello">This is tooltip</ToolTip>
    </div>
    </ErrorBoundary>;
  }
}

Home.propTypes = {};

export default Home;
