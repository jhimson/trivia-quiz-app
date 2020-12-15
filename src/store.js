import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { fetchTriviaReducer } from './reducers/triviaReducers';

const triviaListFromStorage = localStorage.getItem('triviaList')
  ? JSON.parse(localStorage.getItem('triviaList'))
  : [];

const initialState = {
  trivia: { triviaList: triviaListFromStorage },
};

const middleware = [thunk];

const reducer = combineReducers({
  trivia: fetchTriviaReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
