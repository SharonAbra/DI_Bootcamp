import {combineReducers} from 'redux';

let initState = {
    moviesArray: [
        {title: 'Spider-Man: Homecoming', releaseDate: '05-07-2017', rating: 7.4,},
        {title: 'Aquaman', releaseDate: '12-07-2018', rating: 7,},
        {title: 'Black Panther', releaseDate: '02-13-2018', rating: 7.4,},
        {title: 'Avengers: Infinity War', releaseDate: '04-25-2018', rating: 8.3,},
        {title: 'Guardians of the Galaxy', releaseDate: '07-30-2014', rating: 7.9,},
        ]
}


const movieReducer = (state=initState, action={}) => {
    return {...state}
}

const selectedMovieReducer = (state=initState, action={}) => {
    switch (action.payload) {

        case '0':
            return {
                ...state,
                movie: initState.moviesArray[0],
            }
            case '1':
                return {
                    ...state,
                    movie: initState.moviesArray[1],
                }
                case '2':
            return {
                ...state,
                movie: initState.moviesArray[2],
            }
            case '3':
            return {
                ...state,
                movie: initState.moviesArray[3],
            }
            case '4':
            return {
                ...state,
                movie: initState.moviesArray[4],
            }
        default:
            return {...state}
    }
}

export const reducer = combineReducers({
    movieReducer,
    selectedMovieReducer
})