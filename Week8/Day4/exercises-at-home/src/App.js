import React from 'react';
import BuggyCounter from './BuggyCounter'
import ErrorBoundary from './ErrorBoundary'
import './App.css';

class App extends React.Component {
  constructor(){
    super();
  }



  render() {
    return (
        <>
         <ErrorBoundary>
          <BuggyCounter/>
        </ErrorBoundary>
        
        <ErrorBoundary>
          <BuggyCounter/>
        </ErrorBoundary>
        </>

    )
  }
}

export default App;
