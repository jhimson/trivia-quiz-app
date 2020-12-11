import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {triviaReducer} from './reducers/triviaReducer'

const middleware = [thunk];

const initialState = {
    triviaList: []
}

const reducer = {
    trivia: triviaReducer
}


const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;