import { connect } from 'react-redux';
 
const MovieDetails = (props) => {
  const {movie} = props;
  if (movie === undefined) {
    return (
      <div>
        <h1>Movie</h1>
        <p>Select a movie</p>
      </div>
    )
  } else {
    return (
        <>
        <h1>Details:</h1>
        <div>Title: {movie.title}</div>
          <div>Release Date: {movie.releaseDate}</div>
          <div>Rating: {movie.rating}</div>
        </>
      )
  }
}

const mstp = (state) => {
  return {
    movie:state.selectedMovieReducer.movie
  }
}

export default connect(mstp)(MovieDetails);



