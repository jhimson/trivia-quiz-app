import Axios from 'axios';
import triviaConstants from '../constants';

const {
  FETCH_TRIVIA_REQUEST,
  FETCH_TRIVIA_SUCCESS,
  FETCH_TRIVIA_FAIL,
} = triviaConstants;

export const fetchTrivia = (options) => async (dispatch) => {
  const { category, numQuestions, difficulty, type } = options;
  console.log(options);
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    dispatch({ type: FETCH_TRIVIA_REQUEST });

    const { data } = await Axios.get(
      `https://opentdb.com/api.php?amount=${numQuestions}${
        category !== '' ? `&category=${category}` : ''
      }${difficulty !== '' ? `&difficulty=${difficulty}` : ''}${
        type !== '' ? `&type=${type}` : ''
      }`,
      config
    );
    console.log(
      `https://opentdb.com/api.php?amount=${numQuestions}${
        category !== '' ? `&category=${category}` : ''
      }${difficulty !== '' ? `&difficulty=${difficulty}` : ''}${
        type !== '' ? `&type=${type}` : ''
      }`
    );
    dispatch({ type: FETCH_TRIVIA_SUCCESS, payload: data.results });
  } catch (error) {
    dispatch({ type: FETCH_TRIVIA_FAIL, payload: error });
  }
};