/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';
import { browserHistory } from 'react-router';

import './styles/style.scss';

import configureStore from './store/configureStore';

const store = configureStore();
const container = document.getElementById('app');

render(
  <AppContainer>
    <Root store={store} history={browserHistory} />
  </AppContainer>,
  container
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={browserHistory} />
      </AppContainer>,
      container
    );
  });
}
