// actions:

const increase = counter => {
    return {
        type: "INCREASE_COUNT",
        payload: counter
        // payloads are unnecessary here because I am not sending data
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