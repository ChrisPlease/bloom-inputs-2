import isCurrency from 'validator/lib/isCurrency';

import { BloomTextInput } from '../BloomTextInput';
import { editChildProps } from '../../util';

export function withCurrency(WrappedComponent) {
  return class Enhancer extends WrappedComponent {

    static propTypes = {...WrappedComponent.propTypes }

    validateCurrency(input) {
      return !isCurrency(input) ? this.setState({error: this.props.error.invalid}) : '';
    }

    render() {
      const elementTree = super.render();
      const { input } = this.state;
      const updatedInput = editChildProps(
        elementTree,
        {type: 'input'},
        {
          onBlur: () => this.validateCurrency(input),
          type: 'number',
          step: 0.01
        }
      );

      return updatedInput;
    }
  }
}

export default BloomCurrencyInput = withCurrency(BloomTextInput);
