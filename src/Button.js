import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    const { label, onPress } = this.props;
    return (
      <button
        className='Button'
        type='button'
        onClick={onPress}>
        {label}
      </button>
    );
  }
}

export default Button;
