// store:

import { createStore } from "redux";
import { reducer } from "../reducers";

const initialState = { counter: 0 }

export const store = createStore(reducer, initialState);