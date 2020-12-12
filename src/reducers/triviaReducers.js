import triviaConstants from '../constants';

const {
  FETCH_TRIVIA_REQUEST,
  FETCH_TRIVIA_SUCCESS,
  FETCH_TRIVIA_FAIL,
} = triviaConstants;

export const fetchTriviaReducer = (
  state = { triviaList: [] },
  { type, payload }
) => {
  switch (type) {
    case FETCH_TRIVIA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_TRIVIA_SUCCESS:
      return {
        ...state,
        loading: false,
        triviaList: payload,
      };

    case FETCH_TRIVIA_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
