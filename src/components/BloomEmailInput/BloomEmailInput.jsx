import React, { Component } from 'react';
import isEmail from 'validator/lib/isEmail';

import { BloomTextInput } from '../BloomTextInput';

function withEmail(WrappedComponent) {
  return class Enhancer extends Component {

    render() {
      const {validations} = this.props;

      const props = {
        ...this.props,
        validations: validations
        .map(val => {
          return {...val, test: (i) => !isEmail(i)}
        })
      };
      return <WrappedComponent {...props} />;
    }
  }
}

export const BloomEmailInput = withEmail(BloomTextInput);
