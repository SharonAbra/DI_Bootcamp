import SearchForm from './SearchForm';
import  MoviesContainer from './MoviesContainer';

function Landing() {
    return (
      <div className="landing">
        <SearchForm/>
        <MoviesContainer/>
      </div>
    );
  }
  
  export default Landing;