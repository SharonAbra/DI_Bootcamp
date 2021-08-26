import {connect} from 'react-redux';
import {searchMovie, fetchMovies} from '../redux/actions';

const SearchForm = (props) => {
  let {text} = props;
     return (
      <>
        <div style={{textAlign:"center", marginBottom: "80px", backgroundColor:"lightgrey", padding:"10px", marginTop:"80px"}}>
            <h1> Search for a movie ,TV series...</h1>
                <input  type="text"
                        style={{width:"590px", height: "50px", borderRadius:"5px"}}
                        placeholder="Search Movies, TV Series..."
                        onChange={(e) => props.dispatch(searchMovie(e.target.value))}>
                </input>
                <div>
                  <input  type="button" 
                          value="Search"
                          className="f6 link dim ph3 pv2 mb2 dib white bg-blue"
                          style={{borderRadius:"5px", marginTop:"20px"}}
                          onClick={() => props.dispatch(fetchMovies(text))}>
                  </input>
                </div>
        </div>
      </>
    )
  }


  const mstp = (state) => {
    return {
      text:state.text
    }
  }

export default connect(mstp)(SearchForm);