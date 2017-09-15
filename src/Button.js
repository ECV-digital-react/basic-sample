import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    const { label, onClick } = this.props;
    return (
      <button
        className='Button'
        type='button'
        onClick={onClick}>
        {label}
      </button>
    );
  }
}

export default Button;
