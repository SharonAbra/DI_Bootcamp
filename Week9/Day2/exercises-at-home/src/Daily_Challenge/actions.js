const movieAction = movie => {
    return {
        type: 'MOVIE_SELECTED',
        payload: movie
    }
}

export default movieAction;