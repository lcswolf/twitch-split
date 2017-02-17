import React from 'react';
import { Provider } from 'react-redux';
import { hashHistory, Route, Router } from 'react-router';
import store from './store';

import { SearchView } from './search';
import { StreamsView } from './streams';

export default () => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={SearchView} />
      <Route path="/*" component={StreamsView} />
    </Router>
  </Provider>
);
