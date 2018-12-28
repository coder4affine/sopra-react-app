/* eslint-disable */
import React, { Component } from 'react';

class child extends Component {
  render() {
    throw new Error('error');
    return (
      <div>
        <input type="button" value="Generate Error" onClick={this.getError} />
      </div>
    );
  }
}

child.propTypes = {};

export default child;
