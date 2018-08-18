import React from 'react';
import questions from '../questions';

const Answers = props => {
  const { answer, handleClick } = props;
  let answersList = answer.map((a, index) => (
    <li key={index}>
      <button className="answers btn" onClick={e => handleClick(e)} value={a} id={a}>
        {a}
      </button>
    </li>
  ));
  return (
    <div>
      <ul>{answersList}</ul>
    </div>
  );
};

export default Answers;
