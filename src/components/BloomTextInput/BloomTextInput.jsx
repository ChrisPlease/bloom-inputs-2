import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export class BloomTextInput extends Component {

  state = { input: '', error: '' }

  static propTypes = {
    /** Input label */
    label: PropTypes.string,
    /** Wrap the component in an optional `div` */
    wrap: PropTypes.bool,
    /** Error messaging: */
    error: PropTypes.shape({
      /** Error message when input does not meet length requirements */
      minLength: PropTypes.string,
      /** Error message when input exceeds length requirements */
      maxLength: PropTypes.string
    }),
    /** Minimum character length requirements */
    minLength: PropTypes.number,
    /** Maximum character length requirements */
    maxLength: PropTypes.number
  }

  updateInput(e) {
    const { value: input } = e.target;
    this.setState({input});
  }

  clearError() {
    this.setState({error: ''});
  }

  validateString = (input) => {
    const { minLength, maxLength } = this.props;
    const inputLength = input.length;

    if (inputLength < minLength) {
      this.setState({error: this.props.error.minLength});
    } else if (inputLength > maxLength) {
      this.setState({error: this.props.error.maxLength});
    }
  }

  render() {
    const {
      props,
      state,
      updateInput,
      clearError,
      validateString,
    } = this;
    const {
      label,
      placeholder
    } = props;
    const { input, error } = state;

    return (
      <Fragment>
        <label>{label}</label>
        <input
          onChange={updateInput.bind(this)}
          onFocus={clearError.bind(this)}
          onBlur={() => validateString(input)}
          type="text"
          placeholder={placeholder}
          value={input}
        />
        {error && <span>{error}</span>}
      </Fragment>
    );

  }
}

