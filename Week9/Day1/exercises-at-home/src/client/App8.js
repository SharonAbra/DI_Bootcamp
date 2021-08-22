import React from 'react';

class App8 extends React.Component {
    constructor() {
      super();
      this.state = {
        message: '',
        server: ''
      }
      this.handleSubmit = this.handleSubmit.bind(this)
    }

    async componentDidMount() {
        const res = await fetch('http://localhost:4000/api/hello');
        const json = await res.json();
        this.setState({message:json.message});
    }

    async handleSubmit () {
      let input = document.getElementById("input").value
      const incoming = await fetch('http://localhost:4000/api/world', {
        method:'POST',
        headers: {
          'Content-type':'application/json'
      },
      body: JSON.stringify({input:input})
    })
      let data = await incoming.json();
      let text = data.message;
      this.setState({server:text});
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