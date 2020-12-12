/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const ExamCard = () => (
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
            >
              <option value="test">10</option>
              <option value="test">20</option>
              <option value="test">30</option>
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
            >
              <option value="test">Any Category</option>
              <option value="test">20</option>
              <option value="test">30</option>
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
            >
              <option value="test">Any Difficulty</option>
              <option value="test">20</option>
              <option value="test">30</option>
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
            >
              <option value="test">Any Type</option>
              <option value="test">20</option>
              <option value="test">30</option>
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

export default ExamCard;
