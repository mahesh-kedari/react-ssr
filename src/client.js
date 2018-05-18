import React from 'react';
import {hydrate} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './redux/configureStore';

import App from './components/app';

//This State has been set from server
const state = window.__STATE__;

//We no more require __STATE__ object on window. Hence deleting it on load
delete window.__STATE__;

const store = configureStore(state);

hydrate(
  <Provider store={store}>
  <App/>
</Provider>, document.querySelector('#app'));
