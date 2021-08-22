// actions:

const increase = counter => {
    return {
        type: "INCREASE_COUNT",
        payload: counter
    }
}

const decrease = counter => {
    return {
        type: "DECREASE_COUNT",
        payload: counter
    }
}

export {
    increase,
    decrease,
}