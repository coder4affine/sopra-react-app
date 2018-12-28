/* eslint-disable */
import React, { Component, lazy, Suspense, StrictMode } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';

const AsyncHome = lazy(() => import('./containers/Home'));
const AsyncAuthors = lazy(() => import('./containers/Authors'));
const AsyncBooks = lazy(() => import('./containers/Books'));
const AsyncAbout = lazy(() => import('./containers/About'));

const Loading = () => <h1>Loading...</h1>;
const Nopage = () => <h1>No Route Found</h1>;

function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          true ? (
            <StrictMode><Component {...props} /></StrictMode>
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
  

class route extends Component {
  render() {
    return (
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" exact render={(props) => <StrictMode><AsyncHome {...props} /></StrictMode>} />
            <PrivateRoute path="/authors/" component={(props) => <AsyncAuthors  {...props}  />} />
            <PrivateRoute path="/books/" component={(props) => <AsyncBooks  {...props}  />} />
            <Route path="/about/" render={(props) => <AsyncAbout   {...props} />} />
            <Route component={Nopage} />
          </Switch>
        </Suspense>
    );
  }
}

route.propTypes = {};

export default route;
