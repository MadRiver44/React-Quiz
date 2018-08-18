import React from 'react';

const Results = props => {
  const { title, answerCount, count } = props;
  return (
    <div>
      <h2>{title}</h2>
      <h2>
        {answerCount}
        <span> / </span>
        {count}
      </h2>
    </div>
  );
};

export default Results;
