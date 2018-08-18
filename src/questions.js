// const questions = [
//   {
//     question: 'What is Redux?',
//     answers: [
//       'A state management tool',
//       'A tablet for indigestion',
//       'The newest version of JavaScipt',
//       'Nessecary for a React project',
//     ],
//     answerScore: '',
//   },
//   {
//     question: 'React was developed by:',
//     answers: [
//       'U.S government',
//       "React is a conspiracy, doesn't really exist",
//       'Facebook',
//       'Google',
//     ],
//   },
//   {
//     question: 'What is a pure function?',
//     answers: [
//       'A generic resusable function',
//       'A function that does not mutate its arguments nor produces side effects',
//       'A generator',
//       'Returns a long integer',
//     ],
//   },
//   {
//     question: 'A container component is:',
//     answers: [
//       'Handles the business logic and state and passes props to a presentational component',
//       'Same as a Presentational component',
//       'Invoked only once per react app',
//       'A node module',
//     ],
//   },
//   {
//     question: 'What does webpack do?',
//     answers: [
//       'Compiles sass and css files',
//       'Bundles all modules into a single file and performs optimizations',
//       'Packs an html and css file together',
//       'Creates a server for json files',
//     ],
//   },
// ];

const questions = [
  {
    question: 'What is Redux?',
    answers: [
      {
        answer: 'A state management tool',
        points: 3,
      },
      {
        answer: 'A tablet for indigestion',
        points: 0,
      },
      {
        answer: 'The newest version of JavaScipt',
        points: 2,
      },
      {
        answer: 'Nessecary for a React project',
        points: 1,
      },
    ],
    correctAnswer: 'answer1',
  },
  {
    question: 'React was developed by:',
    answers: [
      {
        answer: 'U.S government',
        points: 0,
      },
      {
        answer: "React is a conspiracy, doesn't really exist",
        points: 1,
      },
      {
        answer: 'Facebook',
        points: 3,
      },
      {
        answer: 'Google',
        points: 2,
      },
    ],
    correctAnswer: 'answer3',
  },
  {
    question: 'What is a pure function?',
    answers: [
      {
        answer: 'A generic resusable function',
        points: 2,
      },
      {
        answer: 'A function that does not mutate its arguments nor produces side effects',
        points: 3,
      },
      {
        answer: 'A generator',
        points: 1,
      },
      {
        answer: 'Returns a long integer',
        points: 0,
      },
    ],
    correctAnswer: 'answer2',
  },
  {
    question: 'A container component is:',
    answers: [
      {
        answer:
          'Handles the business logic and state and passes props to a presentational component',
        points: 3,
      },
      {
        answer: 'Same as a Presentational component',
        points: 2,
      },
      {
        answer: 'Invoked only once per react app',
        points: 1,
      },
      {
        answer: 'A node module',
        points: 0,
      },
    ],
    correctAnswer: 'answer1',
  },
  {
    question: 'What does webpack do?',
    answers: [
      {
        answer: 'Compiles sass and css files',
        points: 2,
      },
      {
        answer: 'Bundles all modules into a single file and performs optimizations',
        points: 3,
      },
      {
        answer: 'Packs an html and css file together',
        points: 1,
      },
      {
        answer: 'Creates a server for json files',
        points: 0,
      },
    ],
  },
];

export default questions;
