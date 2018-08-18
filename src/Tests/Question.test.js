import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import Question from '../Components/Question';

// test handleclick
//

describe('Question component', () => {
  test('Question snapshot', () => {
    const tree = renderer.create(<Question question={'What is Redux?'} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Question renders one question', () => {
    const container = document.createElement('div');
    ReactDOM.render(<Question question={'this is a question'} />, container);
    expect(container.textContent).toMatch('');
  });
});
