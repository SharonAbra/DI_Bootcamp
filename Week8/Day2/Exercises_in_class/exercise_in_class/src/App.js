import React, {Component} from 'react';
import './App.css';

// const App = (props) => {

// }

// this is a class component
class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      txt:'Sharon'
      // name: 'Sharon',
      // robots: [] // here I can fetch an api
    }
  }

  // don't need const because in a class this is a method
  // changeName = () => {
  //   this.setState({name:'Mor'})
  // }
plusOne = (value) => {
  this.setState({counter: this.state.counter+value})
}

minusOne =() => {
  let  {counter} = this.state
  this.setState({counter:--counter})
}

handleSubmit = (event) => {
  this.setState({txt:event.target.value})
}
  render() {
    const {counter, txt} = this.state
    return (
      <div className="App">
        <header className="App-header">
         {counter}
         <button onClick={()=>this.plusOne(5)}>Add 5</button>
         {/* note the callback function in plus 5 */}
         <button onClick={this.minusOne}>Deduct 1</button>
         
         <input type="text" onChange={this.handleSubmit}></input>
         <div>
           {txt}
         </div>
        </header>
      </div>
    );
  }
}

export default App;
