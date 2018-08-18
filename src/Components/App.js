import React, { Component } from 'react';
import '../main.css';
import Quiz from './Quiz';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Quiz />
      </div>
    );
  }
}

export default App;
