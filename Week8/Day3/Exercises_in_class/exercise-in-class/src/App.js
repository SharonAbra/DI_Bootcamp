import React from 'react';
import Countries from './Countries';
import Cities from './Cities';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      countries : [],
      cities: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:4000')
    .then(res => res.json())
    .then(data => {
      this.setState({countries:data})
  })
}

handleChange = (e) => {
  let value = e.target.value;
  fetch(`http://localhost:4000/cities/${value}`)
  .then(res => res.json())
  .then(data => {
    this.setState({cities:data})
  })
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Countries countries = {this.state.countries} handleChange={this.handleChange}/>
          <Cities cities = {this.state.cities}/>
        </header>
      </div>
    )
  }
}

export default App;
