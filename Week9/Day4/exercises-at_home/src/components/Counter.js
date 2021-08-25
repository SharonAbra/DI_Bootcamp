import {connect} from 'react-redux';
import { plusOne, minusOne } from '../redux/actions';

const Counter = (props) => {
    const {counter, plusOne, minusOne} = props;

    const incrementIfOdd = () => {
        if (counter % 2 !== 0) {
            plusOne();
        }
    }

const addAsync = () => {
        setTimeout( () => {
            plusOne();
        }, 1000)
    }

    return (
        <>
            <div>Clicked: {counter} times</div>
            <button onClick={plusOne}>+</button>
            <button onClick={minusOne}>-</button>
            <button onClick={incrementIfOdd}>increment If Odd</button>
            <button onClick={addAsync}>Add async</button>
        </>
    )
}

const mstp = (state) => {
    return {
        counter: state.counter
    }
}

const mdtp = (dispatch) => {
    return {
        plusOne: () => dispatch(plusOne()),
        minusOne: () => dispatch(minusOne()),
    }
}

export default connect(mstp, mdtp)(Counter);