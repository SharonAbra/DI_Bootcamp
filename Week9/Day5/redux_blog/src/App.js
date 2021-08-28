import './style.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route path='/:id' component={Post} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
