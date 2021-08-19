import React from 'react'
import Superheroes from './Superheroes';
import Card from './Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
     score: 0,
     topScore: 0,
     Superheroes: Superheroes,
     clicked: []
    }
  }

  handleClick = (e) => {
    let {score} = this.state;
    this.setState({Superheroes:Superheroes.sort((a, b) => 0.5 - Math.random())});
      if (!this.state.clicked.includes(e.target.id)) {
        this.state.clicked.push(e.target.id);
        this.setState({score:score+1});
      } else {
        this.setState({topScore:score})
        this.setState({score:0});
      }
   }

  render() {
    return (
      <div className="container">
        <div className="scores">
          <h1>Superheroes Memory Game</h1>
          <span>Score: {this.state.score}</span>
          <span>Top score: {this.state.topScore}</span>
        </div>
        <div className="instructions">
          <h2>Get points by clicking on an image but don't click on the same image more than once!</h2>
        </div>
        <div className="cards">
          {
          Superheroes.map((item,i)=>{
            return <Card
            onClick = {this.handleClick}
            name={item.name}
            occupation={item.occupation}
            image={item.image}
            id={item.id}
            />
          })
          }
        </div>
      </div>
    )
  }
}

export default App;
