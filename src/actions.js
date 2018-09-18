// action creators
import constants from './constants';

export default questions = (array) => ({
  type: constants.QUESTIONS,
  payload: array
})

export default answers = (array) => ({
  type: constants.ANSWERS,
  payload: array
})

export default correctAnswerCount = (score) => ({
    type: constants.ADD_CORRECT_ANSWERS,
    payload: scores.filter(item => item === 3).length
  });

export default almostRightCount = (score) => ({
  type: constants.ADD_ALMOST_RIGHT_ANSWERS,
  payload: scores.filter(item => item === 2).length
})

export default wayOffCount = (score) => ({
  type: constants.ADD_WAY_OFF_ANSWERS,
  payload: scores.filter(item => item === 1).length
})

export default deadWrongCount = (score) => ({
  type: constants.ADD_DEAD_WRONG_ANSWERS,
  payload: scores.filter(item => item === 0).length
})

export default count = (count) => ({
  type: constants.COUNT,
  payload: count
})

export default missedQuestion = (count) => ({
  type: constants.COUNT,
  payload: count - 1
})


export default score = (score) => ({
  type: constants.SCORE,
  payload: score
})

export default scoreTally = (score) => ({
  type: constants.SCORE_TALLY,
  payload: score
})
