// import {DECREMENT, INCREMENT, ODD} from '../constants'

const initState = {
    counter: 0
}

export const reducer = (state=initState,action={}) => {
    switch (action.type) {
      case 'INCREMENT':
        return {...state, counter:state.counter+1}
      case 'DECREMENT':
        return {...state, counter:state.counter-1}
      // case ODD:
      //   if (counter % 2 !== 0) {
      //     return {...state, counter:state.counter+1}
      //   }
      default:
        return {...state}
    }
  }