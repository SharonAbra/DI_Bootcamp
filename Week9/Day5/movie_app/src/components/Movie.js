import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

const Movie = (props) => {
    console.log(props)
        return (
            <>
                <div style={{display:"flex", marginRight:"10%", marginLeft:"10%"}}>
                    <div style={{marginRight: "20px"}}><img src={props.movie.Poster}></img></div>
                    <div>
                        <h1>{props.movie.Title}</h1>
                        <h4><b>Genre: </b>{props.movie.Genre}</h4>
                        <h4><b>Released: </b>{props.movie.Released}</h4>
                        <h4><b>Rated: </b>{props.movie.imdbRating}</h4>
                        <h4><b>IMDB Rating: </b>{props.movie.imdbRating}</h4>
                        <h4><b>Director: </b>{props.movie.Director}</h4>
                        <h4><b>Writer: </b>{props.movie.Writer}</h4>
                        <h4><b>Actor: </b>{props.movie.Actors}</h4>
                    </div>
                </div>
                
                <div className = "bg-dark-gray" style={{marginBottom: "30px", width:"500px", color:"white", display:"flex", flexDirection:"column", padding:"20px"}}>
                    <p>{props.movie.Plot}</p>
                    <div>
                        <button>View on IMDB</button>
                    </div>
                    <div>
                    <Link to="/" className="btn btn-default text-light"> Go Back To Search </Link>
                    </div>
                </div>

            </>
        )
}

const mstp = (state) => {
    return {
        movie: state.movie
    }
}

export default connect(mstp)(Movie)