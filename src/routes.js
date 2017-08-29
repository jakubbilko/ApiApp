import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Login from './containers/Login';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
  </Route>
);
