import React from "react";
import { store } from '../store/index.js';
import { increase, decrease } from '../actions/index.js';

const Counter = ({ counter }) => {

    const handleClick = event => {
        const buttonType = event.target.id

        switch (buttonType) {
            case "plus":
                store.dispatch(increase(counter));
                break;
            case "minus":
                store.dispatch(decrease(counter));
                break;
            default:
                console.log("wrong button")
        }
    }


    return (
        <>
            <button onClick={handleClick} id="plus">+</button>
            <span>{counter}</span>
            <button onClick={handleClick} id="minus">-</button>
        </>
    );
};

export default Counter;