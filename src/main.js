/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './assets/css/index.scss';

import App from './App';

const rootElement = document.getElementById('app');

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    rootElement,
  );
};

document.addEventListener('DOMContentLoaded', () => {
  render(App);
});

// Respond to code changes when hot module replacement is enabled.
// module.hot is injected when webpack-dev-server is running.
if (module.hot) {
  module.hot.accept('./App', () => { render(App); });
}
