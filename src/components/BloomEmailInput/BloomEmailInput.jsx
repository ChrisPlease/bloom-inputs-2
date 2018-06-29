import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

import isEmail from 'validator/lib/isEmail';

import { BloomTextInput } from '../BloomTextInput';
import { findChildByType } from '../../util';

function withEmail(WrappedComponent) {
  return class Enhancer extends WrappedComponent {

    // state = {
    //   input: '',
    //   error: ''
    // }

    // proc(instance) {
    //   instance.validateString = this.validateEmailString;
    //   console.log(instance.validateString('foo@foo.com'));
    // }

    validateEmailString(input) {
      console.log(isEmail(input));
      return !isEmail(input) ? this.setState({error: this.props.error}) : '';
    }

    traverseChildren (tree = super.render()) {
      return Children.map(
        tree,
        (child) => {

          const newProps = {
            onBlur: () => {
              isEmail(this.state.input) ?
                alert('email is ok') :
                alert('this is not an email')
            }
          };

          if (!child.props) return child;

          if (child.props.children) {
            return React.cloneElement(child, {
              props: child.props,
              children: this.traverseChildren(child.props.children)
            });
          }

          if (child.type === 'input') {
            return React.cloneElement(child, {
                props: {...child.props, ...newProps }
              }
            );
          }
        }
      )
    }

    render() {
      const elementTree = super.render();
      const updatedInput = findChildByType(
        elementTree,
        {type: 'input'},
        { onBlur: () => this.validateEmailString(this.state.input)}
      );

    return updatedInput;
    }
  }
}

export const BloomEmailInput = withEmail(BloomTextInput);
