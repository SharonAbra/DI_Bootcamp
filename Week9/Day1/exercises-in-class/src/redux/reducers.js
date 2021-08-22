let initState = {
    property_one: 'text one',
    property_two: 'text two'
}

export const reducer = (state=initState, action) => {
    return {...state}
    // return a clone of the initialState
}