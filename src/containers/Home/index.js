/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToolTip from '../../components/Tooltip';
import ErrorBoundary from '../../errorBoundary';
import { LanguageConsumer } from '../../languageContext';

class Home extends Component {
    
  render() {
    return <ErrorBoundary>
    <div>
    <ToolTip text="hello">This is tooltip</ToolTip>
    </div>
    <LanguageConsumer>
        {(value) => <div> 
        <h1>{value.language}</h1>
        <input type="button" value="Change Language" onClick={() => value.changeLanguage('de')}  />
        </div>}
    </LanguageConsumer>
    </ErrorBoundary>;
  }
}

Home.propTypes = {};

export default Home;
