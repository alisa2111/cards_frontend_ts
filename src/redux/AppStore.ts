import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import rootReducer from "./RootReduser";
import {getInitialState} from "./AppState";
import logger from 'redux-logger'

const store = createStore(
    rootReducer,
    getInitialState(),
    applyMiddleware(thunk, logger)
);

export default store