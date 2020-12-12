/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

const Setup = () => {
  const [numQuestions, setNumQuestions] = useState(10);
  const [category, setCategory] = useState('');
  const [difficult, setDifficulty] = useState('');
  const [type, setType] = useState('');

  return (
    <div className="flex items-center justify-center w-screen min-h-screen text-center">
      <div className="w-full h-screen p-5 bg-transparent lg:w-1/2 lg:h-72 card lg:rounded-3xl">
        <div className="card-header">
          <h1 className="p-2 text-4xl bg-indigo-400 rounded-full font-Ultra opacity-90">
            Trivia Quiz
          </h1>
        </div>
        <div />
        <div className="w-full h-auto pb-10 mt-10 mb-10 text-2xl bg-white card-body rounded-2xl">
          <div className="flex flex-col items-center justify-center mt-3">
            <div className="p-2 mx-2 mt-5 bg-blue-200 border-2 rounded-2xl">
              <label htmlFor="" className="font-mono text-left text-md">
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
            <div className="p-2 mx-2 mt-5 bg-blue-200 border-2 rounded-2xl">
              <label htmlFor="" className="font-mono text-md">
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
                <option value={26}>Celebreties</option>
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
            <div className="p-2 mx-2 mt-5 bg-blue-200 border-2 rounded-2xl">
              <label htmlFor="" className="font-mono text-md">
                Select Difficulty:{' '}
              </label>
              <select
                name=""
                id=""
                className="p-2 mt-2 bg-gray-200 rounded-lg w-72"
                value={difficult}
                onChange={(e) => setDifficulty(e.target.value)}
              >
                <option value="">Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <div className="p-2 mx-2 mt-5 bg-blue-200 border-2 rounded-2xl">
              <label htmlFor="" className="font-mono text-md">
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
              className="p-2 mt-5 text-white bg-indigo-600 w-80 rounded-xl focus:outline-none"
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