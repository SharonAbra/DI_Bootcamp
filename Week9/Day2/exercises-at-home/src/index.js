import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppDaily from './Daily_Challenge/AppDaily';
// import App from './App';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import { reducer } from "./Daily_Challenge/reducer.js";

export const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppDaily />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
