import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import AppDaily from './daily_challenge/AppDaily.js';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {reducer} from './daily_challenge/reducer';

const logAction = store => {
  return next => {
    return action => {
      const result = next(action);
      console.log(
        `caught in the middleware ${JSON.stringify(store.getState())}`
      );
      return result;
    };
  };
};

const store = createStore(reducer,applyMiddleware(logAction,thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <AppDaily />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

