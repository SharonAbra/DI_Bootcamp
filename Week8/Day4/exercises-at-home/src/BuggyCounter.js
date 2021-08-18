import React from 'react';

class BuggyCounter extends React.Component {
  constructor(props){
    
    super(props);
    
    this.state = {
        counter: 0
        
    }
  }

  handleClick = () => {
    let {counter } = this.state;
    this.setState({counter:++counter})

  }

  render() {
    if  (this.state.counter > 4) {
      throw new Error("I crashed!");
  }
    return (
        <>
            {this.state.counter}
            <button onClick={this.handleClick}>Plus 1</button>
        </>
    )
  }
}

export default BuggyCounter;