import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ExerciseXP from './ExerciseXP.js';
import ExerciseXPplus from './ExerciseXPplus.js';
import DailyChallenge from './DailyChallenge';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <ExerciseXP />
    <ExerciseXPplus/> */}
    <DailyChallenge/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
