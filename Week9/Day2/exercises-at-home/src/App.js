import React from 'react';
import Counter from './components/Counter.js'
import { store } from './store/index.js';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Counter counter={store.getState().counter}/>
      </div>
    )
  }
}

export default App;