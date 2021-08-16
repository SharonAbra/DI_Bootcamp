import React, {Component} from 'react';


class FirstName extends Component {
    constructor() {
      super();
      this.state = {
       txt: ''
      }
    }

handleSubmit = (event) => {
    if (event.keyCode===13){
    this.setState({txt:event.target.value})
    }
}


render() {
    const {txt} = this.state
    return (
      <>
        <input type="text" onKeyUp={this.handleSubmit}></input>
        <span>{txt}</span>
      </>
    )
  }
}

  export default FirstName;