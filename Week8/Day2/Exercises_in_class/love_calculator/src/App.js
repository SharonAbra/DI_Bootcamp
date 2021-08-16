import FirstName from './FirstName';
import SecondName from './SecondName';
import Button from './Button';
import Results from './Results';
import React from 'react';

class App extends React.Component{
  render(){
  return (
    <div>
      <div>
        <FirstName/>
      </div>
      <div>
        <SecondName/>
      </div>
      <div>
        <Button/>
      </div>
      <div>
        <Results/>
      </div>
    </div>
  )
}
}

export default App;
