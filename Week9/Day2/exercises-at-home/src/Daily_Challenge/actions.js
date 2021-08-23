export const showList = moviesArray => {
    return {
        type: 'SHOW_DETAILS',
        payload: moviesArray
    }
}

export const getDetails = e => {
    return {
        type: 'MOVIE_SELECTED',
        payload: e.target.id
    }
}