/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import greeting from '../../HOC/greeting';
import { LanguageConsumer } from '../../languageContext';

class Authors extends Component {
  render() {
    return <div>{this.props.name}
    <LanguageConsumer>
        {(value) => <div> 
        <h1>{value.language}</h1>
        </div>}
    </LanguageConsumer>
    </div>;
  }
}

Authors.propTypes = {};

export default greeting(Authors);
