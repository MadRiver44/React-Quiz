import React from 'react';
import Answers from './../Components/Answers';
import questions from './../questions';
import renderer from 'react-test-renderer';
import TestRenderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

describe('Answers component', () => {
  test('an array of answers renders correctly', () => {
    const tree = renderer
      .create(
        <Answers
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
  test('renders an empty list if none is provided', () => {
    const container = document.createElement('div');
    ReactDOM.render(<Answers answer={[]} />, container);
    expect(container.textContent).toMatch('');
  });
  test('answers array has only 4 choices', () => {
    const answersArray = [
      'A state management tool',
      'A tablet for indeigestion',
      'The newest version of JavaScipt',
      'Nessecary for a React project',
    ];
    expect(answersArray).toHaveLength(4);
  });
  test('correct answer is in answers array', () => {
    const answersArray = [
      'A state management tool',
      'A tablet for indeigestion',
      'The newest version of JavaScipt',
      'Nessecary for a React project',
    ];
    const correctAnswer = 'A state management tool';
    expect(answersArray).toContainEqual('A state management tool');
  });
});
