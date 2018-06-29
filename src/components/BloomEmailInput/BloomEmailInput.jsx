import isEmail from 'validator/lib/isEmail';

import { BloomTextInput } from '../BloomTextInput';
import { editChildProps } from '../../util';

export function withEmail(WrappedComponent) {
  return class Enhancer extends WrappedComponent {

    static displayName = `${WrappedComponent.displayName || WrappedComponent.name || 'Bloom'}EmailInput`;

    validateEmailString(input) {
      return !isEmail(input) ? this.setState({error: this.props.error.invalid}) : '';
    }

    render() {
      const elementTree = super.render();
      const { input } = this.state;
      const updatedInput = editChildProps(
        elementTree,
        {type: 'input'},
        {onBlur: () => this.validateEmailString(input)}
      );

      return updatedInput;
    }
  }
}

export default BloomEmailInput = withEmail(BloomTextInput);
