import React from 'react';
import renderer from 'react-test-renderer';
import Quiz from '../Components/Quiz';
import questions from './../questions';

describe('Quiz component', () => {
  test('Quiz renders a question and an array of answers', () => {
    const tree = renderer
      .create(
        <Quiz
          question={'What is Redux?'}
          answer={[
            'A state management tool',
            'A tablet for indeigestion',
            'The newest version of JavaScipt',
            'Nessecary for a React project',
          ]}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
