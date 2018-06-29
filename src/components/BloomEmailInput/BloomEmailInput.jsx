import React, { Component } from 'react';
import isEmail from 'validator/lib/isEmail';

import { BloomTextInput } from '../BloomTextInput';
import { editChildProps } from '../../util';

export function withEmail(WrappedComponent) {
  return class Enhancer extends Component {

    constructor(props) {
      super(props);

      // props.validations = [
      //   ...props.validations
      //     .map(obj => {
      //       return {...obj, test: (i) => isEmail(i)}
      //     })
      // ];
    }

    addEmailValidation(obj) {
      return {...obj, test: (i) => isEmail(i)}
    }

    render() {
      const newProps = {
        ...this.props,
        validations: [
          ...this.props.validations
            .map(
              (obj) => {
                return {
                  ...obj,
                  test: (i) => isEmail(i)
                };
              }
            )
        ]
      };

      console.log(newProps);

      const props = {...newProps};
      return <WrappedComponent {...newProps} />;
    }
  }
}

export const BloomEmailInput = withEmail(BloomTextInput);
