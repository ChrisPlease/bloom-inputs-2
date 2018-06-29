import React, { Component } from 'react';
import isCurrency from 'validator/lib/isCurrency';

import { BloomTextInput } from '../BloomTextInput';
import { editChildProps } from '../../util';

function withCurrency(WrappedComponent) {
  return class Enhancer extends Component {

    render() {
      const {validations} = this.props;

      const props = {
        ...this.props,
        validations: validations
          .map(val => {
            return {...val, test: (i) => !isCurrency(i)}
          })
      };
      return <WrappedComponent {...props} />;
    }
  }
}

export default BloomCurrencyInput = withCurrency(BloomTextInput);
