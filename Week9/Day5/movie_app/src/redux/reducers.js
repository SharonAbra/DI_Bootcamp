import { SEARCH_MOVIE, FETCH_MOVIE, FETCH_MOVIES, LOADING } from "../constants";

const initState = {
    text: '',
    movies: [],
    loading: 'false',
    movie: {}
}

export const reducer = (state=initState,action={}) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {...state, text:action.payload}
    case FETCH_MOVIE:
      console.log(action.payload)
      return {...state, movie:action.payload}
    case FETCH_MOVIES:
      return {...state, movies:action.payload.Search}
    case LOADING:
      return {...state, loading: true}
    default:
      return {...state}
  }
}
