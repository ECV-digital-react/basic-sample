import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends Component {

  static propTypes = {
    label: PropTypes.string.isRequired,
    style: PropTypes.object,
    disabled: PropTypes.bool,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    style: {},
    disabled: false,
    onPress: () => {},
  };

  render() {
    const { label, style, disabled, onPress } = this.props;
    return (
      <button
        className='Button'
        type='button'
        style={style}
        disabled={disabled}
        onClick={onPress}>
        {label}
      </button>
    );
  }
}

export default Button;
