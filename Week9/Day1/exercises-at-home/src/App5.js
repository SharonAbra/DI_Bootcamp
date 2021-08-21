import React from 'react';

class App5 extends React.Component {
    constructor() {
      super();
      this.state = {
        array: [],
        isLoaded: false
      }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data => this.setState({array:data, isLoaded:true}))
    }

    render() {
        const {array, isLoaded} = this.state;
        return isLoaded ? 
       (
        <div>
            <ul>
                {array.map((item, i) =>{
                    return <li key={i}>Name: {item.name}, Email: {item.email}</li>
                })
                }
            </ul>
        </div>
      ):
      <div>Loading...</div>
    }
  }

  export default App5;