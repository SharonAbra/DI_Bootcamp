import {connect} from 'react-redux';
import { plusOne, minusOne } from './actions.js';

const AgeCounter = (props) => {
    const {age, plusOne, minusOne} = props;

    return (
        <>
            <div>Your age: {age}</div>
            <button onClick={plusOne}>+</button>
            <button onClick={minusOne}>-</button>
        </>
    )
}

const mstp = (state) => {
    return {
        age: state.age
    }
}

const mdtp = (dispatch) => {
    return {
        plusOne: () => dispatch(plusOne()),
        minusOne: () => dispatch(minusOne()),
    }
}

export default connect(mstp, mdtp)(AgeCounter);