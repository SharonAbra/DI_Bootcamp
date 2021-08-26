import {connect} from 'react-redux';
import MovieCard from './MovieCard';

const MoviesContainer = ({movies}) => {
    if (movies.length > 0) {
      return (
        <div style={{textAlign:"center"}}>
          {
            movies.map((item, i) => {
              return <MovieCard movie={item} key={i}/>
          })
          }
        </div>
      )
    } else {
        return (
          <div></div>
      )
    }
  }

  const mstp = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(mstp)(MoviesContainer);