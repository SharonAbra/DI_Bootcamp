import {getDetails} from "./actions";
import { connect } from 'react-redux'

const MovieList = (props) => {
  const {moviesArray, getDetails} = props;
    return (
      <>
      <h1>Movie List</h1>
      <div>
          {
              moviesArray.map((item, i) => {
                return (
                <div>
                  <div><span>{item.title}</span></div>
                  <button id={i} onClick={getDetails}>Details</button>
                </div>
                )
              })
          }
      </div>
      </>
    )
  }

  const mstp = (state) => {
    return {
        moviesArray:state.movieReducer.moviesArray
    }
}

const mdtp = (dispatch) => {
  return {
      getDetails: (e) => dispatch(getDetails(e))
  }
}

export default connect(mstp, mdtp)(MovieList);
