import React, { Component, Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from './route';
import LanguageProvider from './languageContext';
// eslint-disable-next-line react/prefer-stateless-function

class app extends Component {
  state = {};

  render() {
    return (
      <LanguageProvider>
        <Router>
          <Fragment>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/authors/">Authors</Link>
                </li>
                <li>
                  <Link to="/books/">Books</Link>
                </li>
                <li>
                  <Link to="/about/">About</Link>
                </li>
              </ul>
            </nav>
            <Route />
            <div>
              <h1>Footer</h1>
            </div>
          </Fragment>
        </Router>
      </LanguageProvider>
    );
  }
}

app.propTypes = {};

export default app;
