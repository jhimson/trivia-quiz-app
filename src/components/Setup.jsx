/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchTrivia } from '../actions/triviaActions';
import FlashMessage from './FlashMessage';

const Setup = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [numQuestions, setNumQuestions] = useState(10);
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [type, setType] = useState('');
  const [flashMessage, setFlashMessage] = useState('');
  const trivia = useSelector((state) => state.trivia);
  const { triviaList } = trivia;

  const submitTriviaOptions = () => {
    dispatch(fetchTrivia({ numQuestions, category, difficulty, type }));
  };

  useEffect(() => {
    if (triviaList.length !== 0) {
      history.push('/exam');
    } else {
      setFlashMessage('NO TRIVIA FOUND!');
    }
  }, [history, triviaList]);

  useEffect(() => {
    setFlashMessage('');
    localStorage.setItem('triviaList', JSON.stringify([]));
    localStorage.setItem('score', JSON.stringify(0));
    localStorage.setItem('currentNumber', JSON.stringify(0));
  }, []);

  return (
    <div className="flex items-center justify-center w-screen min-h-screen text-center">
      <div className="w-full h-screen p-5 bg-transparent lg:w-1/2 lg:h-72 card lg:rounded-3xl">
        <div className="card-header">
          <h1 className="p-2 text-4xl bg-indigo-400 rounded-full font-Ultra opacity-90">
            Trivia Quiz
          </h1>
        </div>
        <div />
        <div className="w-full h-auto pb-10 mt-10 mb-10 text-2xl bg-black card-body rounded-2xl md:p-5">
          {flashMessage ? <FlashMessage message={flashMessage} /> : null}
          <div className="flex flex-col items-center justify-center mt-3">
            <div className="items-baseline justify-between p-2 mx-2 mt-5 bg-blue-400 border-2 md:flex md:w-full rounded-2xl">
              <label
                htmlFor=""
                className="font-mono text-left md:font-Ultra text-md"
              >
                Number of Questions:{' '}
              </label>
              <select
                name=""
                id=""
                className="p-2 mt-2 bg-gray-200 rounded-lg w-72"
                value={numQuestions}
                onChange={(e) => setNumQuestions(Number(e.target.value))}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
              </select>
            </div>
            <div className="items-baseline justify-between p-2 mx-2 mt-5 bg-blue-400 border-2 md:flex md:w-full rounded-2xl">
              <label htmlFor="" className="font-mono md:font-Ultra text-md">
                Select Category:{' '}
              </label>
              <select
                name=""
                id=""
                className="p-2 mt-2 bg-gray-200 rounded-lg w-72"
                value={category}
                onChange={(e) => setCategory(Number(e.target.value))}
              >
                <option value="">Any Category</option>
                <option value={9}>General Knowledge</option>
                <option value={10}>Entertainment: Books</option>
                <option value={11}>Entertainment: Film</option>
                <option value={12}>Entertainment: Music</option>
                <option value={13}>Entertainment: Musicals & Theatres</option>
                <option value={14}>Entertainment: Televesion</option>
                <option value={15}>Entertainment: Video Games</option>
                <option value={16}>Entertainment: Board Games</option>
                <option value={17}>Science & Nature</option>
                <option value={18}>Science: Computers</option>
                <option value={19}>Science: Mathematics</option>
                <option value={20}>Mythology</option>
                <option value={21}>Sports</option>
                <option value={22}>Geography</option>
                <option value={23}>History</option>
                <option value={24}>Politics</option>
                <option value={25}>Art</option>
                <option value={26}>Celebrities</option>
                <option value={27}>Animals</option>
                <option value={28}>Vehicles</option>
                <option value={29}>Entertainment: Comics</option>
                <option value={30}>Science: Gadgets</option>
                <option value={31}>
                  Entertainment: Japanese Anime & Manga
                </option>
                <option value={32}>Entertainment: Cartoon & Animations</option>
              </select>
            </div>
            <div className="items-baseline justify-between p-2 mx-2 mt-5 bg-blue-400 border-2 md:flex md:w-full rounded-2xl">
              <label htmlFor="" className="font-mono text-md md:font-Ultra">
                Select Difficulty:{' '}
              </label>
              <select
                name=""
                id=""
                className="p-2 mt-2 bg-gray-200 rounded-lg w-72"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <option value="">Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <div className="items-baseline justify-between p-2 mx-2 mt-5 text-center bg-blue-400 border-2 md:flex md:w-full rounded-2xl">
              <label htmlFor="" className="font-mono text-md md:font-Ultra">
                Select Type:{' '}
              </label>
              <select
                name=""
                id=""
                className="p-2 mt-2 bg-gray-200 rounded-lg w-72"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">Any Type</option>
                <option value="multiple">Multiple Choice</option>
                <option value="boolean">True / False</option>
              </select>
            </div>
            <button
              type="button"
              className="p-2 mt-5 text-white bg-indigo-600 w-80 md:w-full rounded-xl focus:outline-none animate-bounce"
              onClick={submitTriviaOptions}
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setup;
