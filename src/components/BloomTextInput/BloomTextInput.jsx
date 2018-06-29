import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

export class BloomTextInput extends Component {

  static displayName = 'BloomTextInput';

  static propTypes = {
    /** Input label */
    label: PropTypes.string.isRequired,
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

  static defaultProps = {
    label: 'Text input'
  }

  state = { input: '', error: '' }

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
    const id = shortid.generate();
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
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          onChange={updateInput.bind(this)}
          onFocus={clearError.bind(this)}
          onBlur={() => validateString(input)}
          type="text"
          placeholder={placeholder}
          value={input}
        />
        {error && <span aria-live="assertive">{error}</span>}
      </Fragment>
    );
  }
}

