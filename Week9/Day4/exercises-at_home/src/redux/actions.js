import {DECREMENT, INCREMENT, ODD} from '../constants'

export const plusOne = () => {

      return {
        type: INCREMENT
      }
}

export const minusOne = () => {
    return {
      type: DECREMENT
      }
}
