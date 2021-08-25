import React from 'react';
import Fname from './components/Fname';
import Sname from './components/Sname';
import Calc from './components/Calc';
import Res from './components/Res';
import './App.css';

const App = () => {
    return (
      <div className="App">
        <header className="App-header">
          <Fname />
          <Sname />
          <Calc/>
          <Res/>
        </header>
      </div>
    )
}


export default App;
