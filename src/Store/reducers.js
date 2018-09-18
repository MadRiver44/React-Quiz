import constants from '../constants';
import { combindeReducers } from 'react-redux';
import questions from '../questions';

export const questions = (state = [], action)  => {
  action.type: constants.QUESTIONS ? action.payload : state;
}

export const answers = (state = [], action) => {
  action.type: constants.ANSWERS ? action.payload : state;
}

export const correctAnswerCount = (state = 0, action) => {
  action.type === constants.ADD_CORRECT_ANSWERS ? parseInt(action.payload) : state;
}

export const almostRightCount = (state = 0 action) => {
  action.type === constants.ADD_ALMOST_RIGHT_ANSWERS ? parseInt(action.payload) : state;
};

export const deadWrongCount = (state = 0, action) => {
  action.type === constants.ADD_DEAD_WRONG_ANSWERS ? parseInt(action.payload) : state;
}

export default wayOffCount = (state = 0, action) => {
  action.type === constants.ADD_WAY_OFF_ANSWERS ? parseInt(action.payload) : state;
}

export default score = (state = [], action) => {
  switch (action.type) {
    case constants.SCORE:
      const questionTypeCount = [...state]
      return questionTypeCount;
    default:
      return state;
  }
}

export default scoreTally = (state = 0, action) => {
  switch (action.type) {
    case constants.SCORE_TALLY :
      let count = correctAnswerCount(state = 0, action) + almostRightCount(state = 0, action) + wayOffCount(state = 0, action) + deadWrongCount(state = 0, action);
      return count;
    default:
      return state;
}

export default count = (state = 0, action) => {
  action.type === constants.COUNT ? parseInt(action.payload) : state;
}

export default missedQuestion = (state = false, action) => {
  switch(action.type) {
    case constants.COUNT;
      return action.payload === count(state = 0, action) ? false : true;
    default:
      return state;
  }
}
