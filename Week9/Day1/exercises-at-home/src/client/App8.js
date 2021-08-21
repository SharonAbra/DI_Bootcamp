import React from 'react';

class App8 extends React.Component {
    constructor() {
      super();
      this.state = {
        message: '',
        server:''
      }
    }

    async componentDidMount() {
        const res = await fetch('http://localhost:4000/api/hello');
        const json = await res.json();
        this.setState({message:json.message});
    }

    async handleSubmit () {
      let input = document.getElementById("input").value
      console.log(input)
      const res = await fetch('http://localhost:4000/api/world', {
        method:'POST',
        headers: {
          'Content-type':'application/json'
      },
      body: JSON.stringify({input:input})
    })
      let json = await res.json();
      let message = json.message;
      this.setState({server:message});
  }

    render() {
        return (
          <>
          <header>Server says: {this.state.message}</header>
          <div>
              <input type="text" id="input" name="input"></input>
              <button onClick={this.handleSubmit} type="button">Submit</button>
              <div>{this.state.server}</div>
          </div>
          </>
        )
    }
  }

  export default App8;