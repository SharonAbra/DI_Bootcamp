import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchMovie} from '../redux/actions';

const MovieCard = (props) => {
    let { Poster, Title, Year, imdbID} = props.movie;
     return (
      <>
        <div className='tc bg-dark-gray br3 pa3 ma2 dib bw2 shadow-5'>
          <img 
              src={Poster}
              alt="movieImage"/>
          <div>
            <h4>{Title}</h4>
            <h4>{Year}</h4>
            <Link to="/movie/:id">
              <button
                  type="button"
                  id= {imdbID} 
                  onClick = {(e) => props.dispatch(fetchMovie(e.target.id))}>
                  Movie Details
              </button>
            </Link>
          </div>
        </div>
      </>
    )
  }

export default connect()(MovieCard);

<Link to="/dashboard">
<button type="button">
     Click Me!
</button>
</Link>