/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useRef } from 'react';
import ent from 'ent';
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
  const [currentNumber, setCurrentNumber] = useState(
    JSON.parse(localStorage.getItem('currentNumber')) || 0
  );
  const [score, setScore] = useState(
    JSON.parse(localStorage.getItem('score')) || 0
  );
  const [isAnswered, setIsAnswered] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');

  const checkAnswer = (Answer, correctAnswer) => {
    setUserAnswer(Answer);
    if (Answer === correctAnswer) {
      localStorage.setItem('score', JSON.stringify(score + 1));
      setScore((prevScore) => prevScore + 1);
    }
    setIsAnswered(true);
  };

  const nextHandler = () => {
    setIsAnswered(false);
    localStorage.setItem('currentNumber', JSON.stringify(currentNumber + 1));
    setCurrentNumber((prev) => {
      if (prev !== triviaList.length) {
        return prev + 1;
      }
      return prev;
    });
  };

  const startButtonHandler = () => {
    setCurrentNumber(0);
    setUserAnswer('');
    setScore(0);
    setIsAnswered(false);
  };

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
            <h1 className="px-5 py-2 text-2xl text-white bg-indigo-800 rounded-full font-Ultra opacity-90">
              Trivia Quiz
            </h1>
          </button>
        </div>
        <div />
        <div className="w-full h-auto pb-10 text-lg bg-black card-body rounded-2xl">
          <div className="flex items-center justify-between p-4 text-white font-Ultra">
            <h1>Score: {`${score}/${triviaList.length}`}</h1>
            <h1>
              Questions:{' '}
              {currentNumber === triviaList.length
                ? currentNumber
                : currentNumber + 1}
              /{triviaList.length}
            </h1>
          </div>
          <div className="flex flex-col items-center justify-center p-2 font-bold">
            <h1 className="p-3 text-white">
              {ent.decode(triviaList[currentNumber].question)}
            </h1>
            <div className="flex flex-col mt-1">
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
                    className={`px-3 py-2 mt-4 font-bold  text-white text-sm w-72 text-center bg-${
                      isAnswered &&
                      userAnswer === triviaList[currentNumber].correct_answer &&
                      userAnswer === choice
                        ? 'green'
                        : isAnswered &&
                          userAnswer !== choice &&
                          triviaList[currentNumber].correct_answer === choice
                        ? 'green'
                        : isAnswered &&
                          userAnswer !==
                            triviaList[currentNumber].correct_answer &&
                          userAnswer === choice
                        ? 'red'
                        : isAnswered &&
                          userAnswer !== choice &&
                          choice !== triviaList[currentNumber].correct_answer
                        ? 'indigo'
                        : 'indigo'
                    }-600 rounded-xl`}
                    disabled={isAnswered ? 'disabled' : null}
                  >
                    {ent.decode(choice)}
                  </button>
                </>
              ))}
            </div>
            <div className="flex justify-end w-full mt-10 mr-5 justify-items-end">
              {currentNumber + 1 !== triviaList.length && isAnswered ? (
                <button
                  type="button"
                  className="px-4 text-white bg-gray-300 rounded-lg focus:outline-none animate-bounce"
                  onClick={nextHandler}
                >
                  <GrFormNextLink size="2em" />
                </button>
              ) : null}
              {currentNumber + 1 === triviaList.length && isAnswered ? (
                <>
                  <button
                    type="button"
                    className="px-3 py-2 text-lg font-bold text-black bg-yellow-200 rounded-xl animate-bounce"
                    onClick={startButtonHandler}
                  >
                    Retake Quiz...
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamCard;
