import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';


class BloomTextInput extends Component {

  static displayName = 'BloomTextInput';

  static defaultProps = {
    label: 'Text input'
  }

  state = {
    input: '',
    error: '',
    isTouched: false,
    isValid: false
  }

  updateInput(e) {
    const { value: input } = e.target;
    this.setState({input});
  }

  clearError() {
    this.setState({ error: '', isTouched: false });
  }

  validateString = (input) => {
    let error;
    let newState = { ...this.state, isTouched: true };

    this.props.validations
      .map(validation => {
        if(validation.test(input)) {
          const error = validation.message;
          newState = { ...newState, isValid: false, error };

          return this.setState(newState);
        }
      });

    this.setState(newState);
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

    const {
      input,
      error,
      isValid,
      isTouched
    } = state;

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
        {(!isValid && isTouched) && <span aria-live="assertive">{error}</span>}
      </Fragment>
    );
  }
}

BloomTextInput.propTypes = {
  /** Input label */
  label: PropTypes.string.isRequired,
  /** Wrap the component in an optional `div` */
  wrap: PropTypes.bool,
  /** Error messaging: */
  validations: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      test: PropTypes.func,
      message: PropTypes.string
    })
  )
};

export default BloomTextInput;
