import Axios from 'axios';
import triviaConstants from '../constants';

import { shuffleArray } from '../utils';

const {
  FETCH_TRIVIA_REQUEST,
  FETCH_TRIVIA_SUCCESS,
  FETCH_TRIVIA_FAIL,
  FETCH_TRIVIA_RESET,
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

    const formattedQuestions = data.results.map((question) => ({
      ...question,
      answers: shuffleArray([
        ...question.incorrect_answers,
        question.correct_answer,
      ]),
    }));

    console.log(formattedQuestions);

    dispatch({
      type: FETCH_TRIVIA_SUCCESS,
      payload: formattedQuestions,
    });

    localStorage.setItem('triviaList', JSON.stringify(formattedQuestions));
  } catch (error) {
    console.log(error);
    dispatch({ type: FETCH_TRIVIA_FAIL, payload: error });
  }
};

export const resetTrivia = () => async (dispatch) => {
  dispatch({ type: FETCH_TRIVIA_RESET });
};
