import React from 'react';
import { hashHistory, IndexRoute, Router, Route } from 'react-router';
import { Layout } from './layout';
import { Search } from './search';

export default () => (
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Search} />
    </Route>
  </Router>
);
