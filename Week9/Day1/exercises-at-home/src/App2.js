import React from 'react';
import ExerciseXpOneB from './ExerciseXpOneB';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
          first_name: '',
          last_name: '',
          phone: '',
          email: '',
          submit: false,
          reset: true
    }
  }

  changeHandler = (e) => {
    this.setState({[e.target.id]:e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({submit:true, reset:false});
  }

  handleReset = (e) => {
    this.setState({reset:true})
  }

  render() {
    let {reset, submit} = this.state;

    if (reset) {
      return (
          <div className="App">
          <header className="App-header">
          <ExerciseXpOneB submitHandler={this.submitHandler} changeHandler={this.changeHandler}/>
          <div>
            <h1>{this.state.message}</h1>
          </div>
          </header>
        </div>)
        
    } else if (submit) {
        return (
        <div className="container container2">
        <p>{this.state.last_name}, {this.state.first_name}</p>
        <p>{this.state.phone} | {this.state.email}</p>
        <button onClick={this.handleReset}>Reset</button>
      </div>)
    }
  }
}

export default App;
