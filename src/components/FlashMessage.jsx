import React from 'react';

const FlashMessage = ({ message }) => (
  <div className="p-2 mb-5 font-mono text-xl text-white bg-red-400">
    <h1>{message}</h1>
  </div>
);

export default FlashMessage;
