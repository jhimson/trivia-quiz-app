import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { fetchTriviaReducer } from './reducers/triviaReducers';

const middleware = [thunk];

const initialState = {
  triviaList: [],
};

const reducer = combineReducers({
  trivia: fetchTriviaReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
