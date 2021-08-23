import React from 'react';

class MovieList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
          <h1>Movie List</h1>
          <span>Aquaman    </span><button onClick={this.showDetails}></button>
          <span>Black Panther    </span><button onClick={this.showDetails}></button>
          <span>Avengers: Infinity War    </span><button onClick={this.showDetails}></button>
          <span>Guardians of the Galaxy    </span><button onClick={this.showDetails}></button>
      </div>
    )
  }
}

export default MovieList;