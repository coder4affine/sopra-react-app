/* eslint-disable */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default WrappedComponent => {
  class greeting extends Component {
    state = {
        name: 'hello'
    }

    constructor(props) {
        super(props);
        this.getData();
    }

    getData() {
        const name = 'Yagnesh'
        setTimeout(() => {
            this.setState({name});
        }, 2000);
    }
    

    render() {
      return <div> <h1>Hello,</h1><WrappedComponent {...this.state} /></div>;
    }
  }
  return greeting;
};
