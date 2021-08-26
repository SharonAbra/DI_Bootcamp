import { SEARCH_MOVIE, FETCH_MOVIE, FETCH_MOVIES, LOADING, URL } from "../constants";

export const searchMovie = (text) => {
    return {
      type: SEARCH_MOVIE,
      payload: text
    }
  }

  export const loading = () => {
    return {
      type: LOADING,
    }
  }
  
  export const fetchMovies = (text) => (dispatch) => {
    // e.preventDefault();
    fetch(`${URL}s=${text}`)
    .then(res => res.json())
    .then(data => {
      dispatch({type:FETCH_MOVIES, payload:data})
    })
    .catch(e => {
      console.log(e);
    })
  }

  export const fetchMovie = (imdbID) => (dispatch) => {
    fetch(`${URL}i=${imdbID}`)
    .then(res => res.json())
    .then(data => {
      dispatch({type:FETCH_MOVIE, payload:data})
    })
    .catch(e => {
      console.log(e);
    })
  }

  