import React, { Component } from 'react';
import questions from '../questions.js';
import Question from './Question';
import Answers from './Answers';
import Assesment from './Assesment';

const answers = questions.map((q, index) => q.answers); // array of array of answer objects
// const results = answers[0].map((a, index) => a.answer); // array of answers
// console.log(answers, results);
const results = (function a(answers) {
  let arr = [];
  for (let i = 0; i < answers.length; i++) {
    let item = Array.from(answers[i].map((item, index) => item.answer));
    if (item.length !== 0) {
      arr.push(item);
    }
  }
  return arr;
})(answers);

const calculateScore = str => {
  let value = 0;
  for (let i = 0; i < answers.length; i++) {
    let obj = answers[i];
    for (let key in obj) {
      if (obj[key]['answer'] === str) {
        value = obj[key]['points'];
        return value;
      }
    }
  }
};

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [...questions],
      answers: [...results], // needs to be an array of arrays of answers
      correctAnswerCount: 0,
      almostRightCount: 0,
      wayOffCount: 0,
      deadWrongCount: 0,
      score: [],
      scoreTally: 0,
      count: 0,
      missedQuestion: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.questionTypeCount = this.questionTypeCount.bind(this);
    this.handleChangeAnswerLeft = this.handleChangeAnswerLeft.bind(this);
    this.handleChangeAnswerRight = this.handleChangeAnswerRight.bind(this);
    // this.detectUnansweredQuestions = this.detectUnansweredQuestions.bind(this);
  }

  // detectUnansweredQuestions() {
  //   let indexesOfSkippedQuestions = this.state.score.reduce((all, item, index) => {
  //     if (item === null) {
  //       all.push(item);
  //     }
  //     return all;
  //   }, []);
  //   if (indexesOfSkippedQuestions.length !== 0) {
  //     this.setState({
  //       unansweredQuestions: indexesOfSkippedQuestions,
  //       missedQuestion: !!this.state.missedQuestion,
  //     });
  //   }
  //   console.log(indexesOfSkippedQuestions);
  // }

  handleChangeAnswerLeft(e) {
    e.preventDefault();
    this.setState({
      count: this.state.count - 1,
      missedQuestion: !this.state.missedQuestion,
    });
  }

  handleChangeAnswerRight(e) {
    // if i go back one, answer it and then click right again,
    // it looks as if I still didn't answer the last question
    e.preventDefault();
    this.setState({
      count: this.state.count + 1,
    });

    if (this.state.score[this.state.count - 1] !== null) {
      this.setState({
        missedQuestion: !this.state.missedQuestion,
      });
    }
  }

  questionTypeCount() {
    let arr = [...this.state.score];
    let deadWrong, wayOff, almostRight, correct;
    deadWrong = arr.filter(item => item === 0).length;
    wayOff = arr.filter(item => item === 1).length;
    almostRight = arr.filter(item => item === 2).length;
    correct = arr.filter(item => item === 3).length;
    this.setState({
      deadWrongCount: deadWrong,
      wayOffCount: wayOff,
      almostRightCount: almostRight,
      correctAnswerCount: correct,
    });
  }

  handleClick(e) {
    e.preventDefault();
    let points = calculateScore(e.target.value);
    let arrayOfScores = this.state.score;
    arrayOfScores[this.state.count] = points;
    let total = arrayOfScores.reduce((item, itemNext) => {
      return item + itemNext;
    }, 0);
    this.setState({
      count: this.state.count + 1,
      score: arrayOfScores, //this.state.score + points
      scoreTally: total,
    });
    if (this.state.score.length) {
      this.questionTypeCount();
    }
  }

  render() {
    const {
      questions,
      answers,
      count,
      correctAnswerCount,
      score,
      almostRightCount,
      wayOffCount,
      deadWrongCount,
      scoreTally,
      missedQuestion,
    } = this.state;

    return count !== results.length ? (
      <div className="question">
        <span className="questionNumber">
          {count + 1} {count + 1 === 5 ? <span>Last question</span> : null}
        </span>

        <Question answer={answers[count]} count={count}>
          {questions[count].question}
          <span className="alert">
            {missedQuestion === true ? <p>Hey you misssed last question: # {count}</p> : null}
          </span>
        </Question>

        <div>
          <span style={{ fontSize: '20px' }}>{'Questions Answered : '}</span>
          <span className="alert-green">
            {`${this.state.score.map((item, index) => index + 1)}`}{' '}
          </span>
        </div>

        <Answers handleClick={this.handleClick} answer={answers[count]} count={count} />

        <div className="arrows">
          {count === 0 ? (
            <button className="hidden btn btn-left" />
          ) : (
            <button className="btn btn-left" onClick={this.handleChangeAnswerLeft}>
              {'<-'}
            </button>
          )}
          <button className="btn btn-right" onClick={this.handleChangeAnswerRight}>
            {'->'}
          </button>
        </div>
      </div>
    ) : (
      <Assesment
        count={count}
        correctAnswerCount={correctAnswerCount}
        almostRightCount={almostRightCount}
        wayOffCount={wayOffCount}
        deadWrongCount={deadWrongCount}
        scoreTally={scoreTally}
      />
    );
  }
}
export default Quiz;
