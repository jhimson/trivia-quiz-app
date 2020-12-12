/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector } from 'react-redux';

const ExamCard = () => {
  const trivia = useSelector((state) => state.trivia);
  const { triviaList } = trivia;
  return (
    <div className="flex items-center justify-center w-screen min-h-screen text-center">
      <div className="w-full h-screen p-5 bg-transparent lg:w-1/2 lg:h-72 card lg:rounded-3xl">
        <div className="card-header">
          <h1 className="p-2 text-4xl bg-indigo-400 rounded-full font-Ultra opacity-90">
            Trivia Quiz {triviaList.length}
          </h1>
        </div>
        <div />
        <div className="w-full h-auto pb-10 mt-10 mb-10 text-2xl bg-white card-body rounded-2xl">
          <div className="flex flex-col items-center justify-center mt-3">
            <h1>Test</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamCard;
