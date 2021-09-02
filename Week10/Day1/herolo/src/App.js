import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar';
import { Main } from './components/Main';
import { Favorites } from './components/Favorites';
import { Switch, Route , BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/favorites' component={Favorites} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
