# Payment Info Validation

Payment info validation utility

## Inspiration

- [Payment](https://github.com/jessepollak/payment)
  - I wanted to separate the validate from the DOM interaction, so it could easily be used with different front end frameworks
- [AngularJS ABA Routing Validation](https://github.com/jdforsythe/angular-aba-routing-validation)
  - This is a directive I made for AngularJS to validate ABA routing numbers

## Install

```sh
$ npm install -S @elevism/pay-val
```

## Validate Routing Number

The routing number validation is simple and non-configurable, so it's just a function.

```ts
import { validateRoutingNumber } from '@elevism/pay-val';

console.log(validateRoutingNumber('440000000')); // true, valid routing number

console.log(validateRoutingNumber('540000000')); // false, routing numbers cannot start with 5

console.log(validateRoutingNumber('440000001')); // false, fails checksum
```

## Validate Credit Card

Credit card validation is configurable, so you need to create an instance of the class.

### Simple Examples

```ts
import { CreditCardValidator, CardType } from '@elevism/pay-val';

const validator = new CreditCardValidator({
  allowedCardTypes: [CardType.Amex, CardType.Discover, CardType.MasterCard, CardType.Visa],
});

console.log(validator.validateCardNumber('4242424242424242')); // true, valid card number

console.log(validator.getCardTypeFromCardNumber('4242424242424242') === CardType.Visa); // true, Visa card
console.log(validator.getCardTypeFromCardNumber('4242424242424242')); // 'visa'

console.log(validator.validateExpiration('09', '2021')); // false, expiration is in the past

console.log(validator.validateExpiration('09', '26')); // true, expiration is valid and not in the past
console.log(validator.validateExpiration('09', '2026')); // true, expiration is valid and not in the past

console.log(validator.validateCombinedExpiration('0926')); // true
console.log(validator.validateCombinedExpiration('092026')); // true
console.log(validator.validateCombinedExpiration('09/26')); // true
console.log(validator.validateCombinedExpiration('09/2026')); // true
console.log(validator.validateCombinedExpiration('092026')); // true

console.log(validator.validateExpirationMonth('09')); // true
console.log(validator.validateExpirationYear('2026')); // true

console.log(validator.validateCvc(CardType.Visa, '123')); // true, Visa CVC is 3 digits
console.log(validator.validateCvc(CardType.Amex, '1234')); // true, Amex CVC is 4 digits
```

### Configuration

Library supports several cards, including:

- American Express
- Dankort
- Diners Club
- Discover
- Elo
- Hipercard
- JCB
- Laser
- Maestro
- MasterCard
- Mir
- Troy
- Union Pay
- Visa Electron
- Visa

Options:

```ts
interface CreditCardValidatorOptions {
  /**
   * Array of CardType to allow for validation
   */
  allowedCardTypes: CardType[];
}
```

- `allowedCardTypes` an array of `CardType` (enum) to allow for validation, e.g. `[CardType.Visa, CardType.Amex]`
