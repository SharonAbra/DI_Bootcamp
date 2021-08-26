import {Switch, Route} from 'react-router-dom';
import {Navbar} from './components/Navbar';
import Landing from './components/Landing';
import Movie from './components/Movie';
import {Footer} from './components/Footer';
import 'tachyons';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" children={<Landing/>} />
        <Route exact path="/movie/:id" children={<Movie/>} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
