import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ label, style, disabled, onPress }) => (
  <button
    className='Button'
    type='button'
    style={style}
    disabled={disabled}
    onClick={onPress}>
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  style: {},
  disabled: false,
  onPress: () => {},
};

export default Button;
