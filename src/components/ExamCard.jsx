/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GrFormNextLink } from 'react-icons/gr';
import { Link, useHistory } from 'react-router-dom';
import { resetTrivia } from '../actions/triviaActions';

const ExamCard = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const trivia = useSelector((state) => state.trivia);
  const { triviaList } = trivia;

  const [currentNumber, setCurrentNumber] = useState(0);

  const choices = [
    ...triviaList[currentNumber].incorrect_answers,
    triviaList[currentNumber].correct_answer,
  ];

  const shuffled = choices
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);

  return (
    <div className="flex items-center justify-center w-screen min-h-screen text-center">
      <div className="w-full h-screen p-5 bg-transparent lg:w-1/2 lg:h-72 card lg:rounded-3xl">
        <div className="card-header">
          <button
            type="button"
            className="p-5"
            onClick={() => {
              dispatch(resetTrivia());
              history.push('/');
            }}
          >
            <h1 className="p-5 text-4xl text-white bg-indigo-800 rounded-full font-Ultra opacity-90">
              Trivia Quiz
            </h1>
          </button>
        </div>
        <div />
        <div className="w-full h-auto pb-10 mt-10 mb-10 text-2xl bg-black card-body rounded-2xl">
          <div className="flex items-center justify-between p-2 mt-3 text-white font-Ultra">
            <h1>Score: 0</h1>
            <h1>
              Questions:{' '}
              {currentNumber === triviaList.length
                ? currentNumber
                : currentNumber + 1}
              /{triviaList.length}
            </h1>
          </div>
        </div>
        <div className="w-full h-auto pb-10 mt-10 mb-10 text-2xl bg-black card-body rounded-2xl">
          <div className="flex flex-col items-center justify-center p-2 mt-3 font-bold">
            <h1 className="p-3 text-white">
              {triviaList[currentNumber].question}
            </h1>
            <div className="flex flex-col mt-5">
              {shuffled.map((choice) => (
                <button
                  type="button"
                  className={`px-3 py-2 mt-4 font-bold text-left text-white ${
                    triviaList[currentNumber].correct_answer === choice
                      ? 'bg-green-400'
                      : ' bg-indigo-800'
                  } rounded-xl`}
                >
                  {choice}
                </button>
              ))}

              {/* <button
                type="button"
                className="px-3 py-2 mt-4 font-bold text-left text-white bg-indigo-800 rounded-xl"
              >
                Final Fantasy: Reborn
              </button>
              <button
                type="button"
                className="px-3 py-2 mt-4 font-bold text-left text-white bg-indigo-800 rounded-xl"
              >
                Final Fantasy XVI
              </button>
              <button
                type="button"
                className="px-3 py-2 mt-4 font-bold text-left text-white bg-indigo-800 rounded-xl"
              >
                Final Fantasy XIII-3
              </button> */}
            </div>
            <div className="flex justify-end w-full mt-10 mr-5 justify-items-end">
              {currentNumber + 1 !== triviaList.length ? (
                <button
                  type="button"
                  className="px-4 text-white bg-gray-300 rounded-lg focus:outline-none"
                  onClick={() =>
                    setCurrentNumber((prev) => {
                      if (prev !== triviaList.length) {
                        return prev + 1;
                      }
                      return prev;
                    })
                  }
                >
                  <GrFormNextLink size="2em" />
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamCard;
