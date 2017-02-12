import React from 'react';
import { Provider } from 'react-redux';
import { hashHistory, Route, Router } from 'react-router';
import store from './store';

import { SearchView } from './search';
import { StreamsView } from './streams';

// function onEnter(nextState, replace) {
//   console.log('nextState', nextState, 'replace', replace); // eslint-disable-line
// }

export default () => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={SearchView} />
      <Route path="/*" component={StreamsView} />
      {/* <Route path="/*" component={StreamsView} onEnter={onEnter} />*/}
    </Router>
  </Provider>
);
