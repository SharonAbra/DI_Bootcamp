import { increase, decrease } from '../actions/index.js';
import { connect } from 'react-redux'


const Counter = ({ counter, increase, decrease }) => {

    return (
        <>
            <button onClick={increase}>+</button>
            <span>{counter}</span>
            <button onClick={decrease}>-</button>
        </>
    );
};

const mstp = (state) => {
    return {
        counter:state.counter
    }
}

const mdtp = (dispatch) => {
    return {
        increase: () => dispatch(increase()),
        decrease: () => dispatch(decrease())
    }
}

export default connect(mstp, mdtp)(Counter);