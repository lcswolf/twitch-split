import React from 'react';
import { hashHistory, Route, Router } from 'react-router';
import { SearchView } from './search';

// function onEnter(nextState, replace) {
//   console.log('nextState', nextState, 'replace', replace); // eslint-disable-line
// }

export default () => (
  <Router history={hashHistory}>
    <Route path="/" component={SearchView} />
    {/* <Route path="/*" component={Search} onEnter={onEnter} />*/}
  </Router>
);
