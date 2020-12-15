/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GrFormNextLink } from 'react-icons/gr';
import { Link, useHistory } from 'react-router-dom';
import { resetTrivia } from '../actions/triviaActions';

const ExamCard = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const trivia = useSelector((state) => state.trivia);
  const { triviaList } = trivia;

  // Local state
  const [currentNumber, setCurrentNumber] = useState(0);
  const [score, setScore] = useState(0);

  const checkAnswer = (userAnswer, correctAnswer) => {
    let correct = null;
    if (userAnswer === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
      correct = true;
    } else {
      correct = false;
    }
    // setAnswered(true);
    console.log(correct ? 'CORRECT' : 'WRONG!');
    return correct;
  };

  const nextHandler = () => {
    setCurrentNumber((prev) => {
      if (prev !== triviaList.length) {
        return prev + 1;
      }
      return prev;
    });
  };

  useEffect(() => {
    console.log('RENDEEERED!');
  });

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
            <h1>Score: {score}</h1>
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
              {triviaList[currentNumber].answers.map((choice) => (
                <>
                  <button
                    key={choice}
                    type="button"
                    onClick={() =>
                      checkAnswer(
                        choice,
                        triviaList[currentNumber].correct_answer
                      )
                    }
                    className={`px-3 py-2 mt-4 font-bold text-left text-white bg-${
                      choice === triviaList[currentNumber].correct_answer
                        ? 'green'
                        : 'indigo'
                    }-600 rounded-xl`}
                  >
                    {choice}
                  </button>
                </>
              ))}
            </div>
            <div className="flex justify-end w-full mt-10 mr-5 justify-items-end">
              {currentNumber + 1 !== triviaList.length ? (
                <button
                  type="button"
                  className="px-4 text-white bg-gray-300 rounded-lg focus:outline-none"
                  onClick={nextHandler}
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
