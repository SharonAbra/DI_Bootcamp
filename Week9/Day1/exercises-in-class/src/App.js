import React from 'react'
import './App.css';
// import { createStore } from "redux";
// import reducer from "./reducers";

// const initialState = { subject: "Javascript" };
// const store = createStore(reducer, initialState);

class App extends React.Component{
  constructor() {
    super();
  }

  insertText = (e) => {
    this.setState({property_one:e.target.value})
  }

  render () {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux Simple Exercise</h1>
        <p>Here is property one: {this.state.property_one}</p>
        <p>Here is property two: {this.state.property_two}</p>
        <p>Change property one:</p>
        <input type="text" onChange = {this.insertText}></input>
      </header>
    </div>
  )
  }
}

export default App;
