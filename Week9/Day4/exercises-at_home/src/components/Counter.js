import {connect} from 'react-redux';
import { plusOne, minusOne, incrementIfOdd } from '../redux/actions';

const Counter = ({counter, plusOne, minusOne, incrementIfOdd}) => {
    return (
        <>
            <div>Clicked: {counter} times</div>
            <button onClick={plusOne}>+</button>
            <button onClick={minusOne}>-</button>
            {/* <button onClick={incrementIfOdd}>increment If Odd</button>
            <button onClick={addAsync}>Add async</button> */}
        </>
    )
}

const addAsync = () => {
    // setTimeout( () => {
    //     counter++
    // }, 1000)
}

const mstp = (state) => {
    return {
        counter: state.counter
    }
}

const mdtp = (dispatch) => {
    return {
        plusOne: () => dispatch(plusOne),
        minusOne: () => dispatch(minusOne),
        // incrementIfOdd: () => dispatch(incrementIfOdd)
    }
}

export default connect(mstp, mdtp)(Counter);