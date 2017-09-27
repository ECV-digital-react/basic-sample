import React, { Component } from 'react';
import './App.css';
import Layout from './../layout/Layout';
import Button from './../button/Button';

const MIN_VALUE = 0;
const MAX_VALUE = 10;

const ACTIONS = [
  {
    label: '👎👎',
    value: -2,
  },
  {
    label: '👎',
    value: -1
  },
  {
    label: '👍',
    value: 1,
  },
  {
    label: '👍👍',
    value: 2,
  },
];

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

  renderActions = () => {
    return ACTIONS.map(item => {
      const { label, value } = item;
      // @TODO Missing key props !
      return (
        <Button
          label={label}
          onPress={() => this.onCounterChange(value)} />
      );
    });
  }

  render() {
    const { counter } = this.state;

    return (
      <Layout>
        <div className="App">
          <div className="App-header">
            <h2>Counter value: {counter}</h2>
            <small>Entre {MIN_VALUE} et {MAX_VALUE}</small>
          </div>
          <div className="App-intro">
            {this.renderActions()}
          </div>
        </div>
      </Layout>
    );
  }
}

export default App;
