import React from 'react';
import { store } from './store.js';
import MovieList from './MovieList';
import MovieDetails from './MovieDetails.js';

class AppDaily extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
          <h1>Redux Movies</h1>
          <MovieList/>
          <MovieDetails/>
      </div>
    )
  }
}

export default AppDaily;