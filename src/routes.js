import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Login from './containers/Login';
import Products from './containers/Products';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="/foo" component={Products} />
  </Route>
);
