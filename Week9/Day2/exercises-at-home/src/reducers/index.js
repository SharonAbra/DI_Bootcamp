//reducer:

const reducer = (state, action) => {

    let counter = action.payload;

    switch (action.type) {

        case "INCREASE_COUNT":
            return {
                ...state,
                counter: counter+1,
            }

        case "DECREASE_COUNT":
            return {
                ...state,
                counter: counter-1
            }
        default:
            return state;
    }
}

export { reducer };