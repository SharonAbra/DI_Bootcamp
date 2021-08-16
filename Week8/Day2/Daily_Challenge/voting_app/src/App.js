import React from 'react';
import Language from './Language'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      languages : [
          {name: "Php", votes: 0},
          {name: "Python", votes: 0},
          {name: "JavaScript", votes: 0},
          {name: "Java", votes: 0}
      ]
   }
  }

  addOne = (e) => {
    this.setState({votes:this.state.languages[e.target.id].votes++})
  }

  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            {
              this.state.languages.map((item, i) => {
                return <Language name={this.state.languages[i].name} votes={this.state.languages[i].votes} addOne={this.addOne} btn={i} key={i}/>
              })
            }
          </header>
        </div>
      </>
    )
  }
}

export default App;


{/* // <div className="App">
  //   <header className="App-header">
  //     <Language name={this.state.languages[0].name} votes={this.state.languages[0].votes} addOne={this.addOne} btn="0"/>
  //     <Language name={this.state.languages[1].name} votes={this.state.languages[1].votes} addOne={this.addOne} btn="1"/>
  //     <Language name={this.state.languages[2].name} votes={this.state.languages[2].votes} addOne={this.addOne} btn="2"/>
  //     <Language name={this.state.languages[3].name} votes={this.state.languages[3].votes} addOne={this.addOne} btn="3"/>
  //   </header>
  // </div> */}