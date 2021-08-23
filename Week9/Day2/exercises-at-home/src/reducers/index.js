const initialState = { counter: 0 }
export const reducer = (state=initialState, action={}) => {

    switch (action.type) {

        case "INCREASE_COUNT":
            return {
                ...state,
                counter: state.counter+1,
            }

        case "DECREASE_COUNT":
            return {
                ...state,
                counter: state.counter-1
            }
        default:
            return {...state}
    }
}
