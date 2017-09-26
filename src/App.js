import React, { Component } from 'react';
import './App.css';
import Button from './Button';

const MIN_VALUE = 0;
const MAX_VALUE = 10;

class App extends Component {

  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  onCounterChange = value => {
    const { counter } = this.state;
    const newValue = counter + value;

    if (newValue < MIN_VALUE) {
      alert('Minimum atteint');
    } else if (newValue > MAX_VALUE) {
      alert('Maximum atteint');
    } else {
      this.setState({ counter: newValue });
    }
  }

  render() {
    const { counter } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Counter value: {counter}</h2>
          <small>Entre {MIN_VALUE} et {MAX_VALUE}</small>
        </div>
        <div className="App-intro">
          <Button
            label={'👎'}
            onPress={() => this.onCounterChange(-1)} />
          <Button
            label={'👍'}
            onPress={() => this.onCounterChange(1)} />
        </div>
      </div>
    );
  }
}

export default App;
