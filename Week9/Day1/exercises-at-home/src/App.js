import React from 'react';
import ExerciseXpOne from './ExerciseXpOne';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
          title: '',
          author: '',
          genre: '',
          year: '',
          message: ''
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.id]:e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({message:'Your form was submitted successfully!'});
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <ExerciseXpOne submitHandler={this.submitHandler} changeHandler={this.changeHandler}/>
        <div>
          <h1>{this.state.message}</h1>
        </div>
        </header>
      </div>
    )
  }
}

export default App;
