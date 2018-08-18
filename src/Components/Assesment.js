import React from 'react';
import Results from './Results';

const Assesment = props => {
  const { scoreTally, count, correctAnswerCount, almostRightCount, wayOffCount, deadWrongCount } = props;
  return (
    <div>
      <h1>Assesment</h1>
      <div>
        <h2>Score</h2>
        <h2>{scoreTally}</h2>
      </div>
      <Results title={'Correct Answers'} answerCount={correctAnswerCount} count={count} />
      <Results title={'Almost Right'} answerCount={almostRightCount} count={count} />
      <Results title={'Way Off'} answerCount={wayOffCount} count={count} />
      <Results title={'Dead Wrong'} answerCount={deadWrongCount} count={count} />
    </div>
  );
};

export default Assesment;
