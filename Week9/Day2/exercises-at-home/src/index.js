import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// we import the store to use the subscribe(listener) method
import { store } from './store/index.js';

//1.
const render = function() {
  ReactDOM.render(<App />, document.getElementById("root"))
} 

//2.
render()

//3. 
store.subscribe(render);

