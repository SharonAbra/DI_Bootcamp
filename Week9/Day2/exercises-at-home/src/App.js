import React from 'react';
import Counter from './components/Counter.js'

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Counter/>
      </div>
    )
  }
}

export default App;

// counter={store.getState().counter}