import { BloomButton } from './components/BloomButton';
import { default as BloomCurrencyInput, withCurrency } from './components/BloomCurrencyInput';
import { default as BloomEmailInput, withEmail } from './components/BloomEmailInput';
import { BloomTextInput } from './components/BloomTextInput';

export default {
  BloomButton,
  BloomCurrencyInput,
  BloomEmailInput,
  BloomTextInput,

  // HoC Factories
  withCurrency,
  withEmail
}
