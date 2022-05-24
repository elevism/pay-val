import { CARDS } from './cards.const';
import { CardType, Card } from './interface';
import { getCardFromCardNumber } from './get-card-from-number/get-card-from-number';
import { validateCardNumber } from './validate-card-number/validate-card-number';
import { validateExpiration, validateExpirationMonth, validateExpirationYear } from './validate-expiration/validate-expiration';

/**
 * Options for validation
 */
export interface CreditCardValidatorOptions {
  /**
   * Array of CardType to allow for validation
   */
  allowedCardTypes: CardType[];
}

/**
 * Validation
 */
export class CreditCardValidator {
  allowedCardTypes!: CardType[];
  allowedCards!: Card[];

  constructor(opts: CreditCardValidatorOptions) {
    validateOptions(opts);

    this.allowedCardTypes = opts.allowedCardTypes;
    this.allowedCards = opts.allowedCardTypes.map((cardType) => CARDS[cardType]);
  }

  /**
   * Get the `Card` object from a provided card number
   */
  getCardFromCardNumber(cardNumber: string): Card {
    return getCardFromCardNumber(this.allowedCards, cardNumber);
  }

  /**
   * Get the `CardType` from a provided card number
   */
  getCardTypeFromCardNumber(cardNumber: string): CardType {
    return this.getCardFromCardNumber(cardNumber)?.type;
  }

  /**
   * Validate a credit card number against the allowed card types
   */
  validateCardNumber(cardNumber: string): boolean {
    const cardType = this.getCardTypeFromCardNumber(cardNumber);

    return validateCardNumber(cardType, cardNumber);
  }

  /**
   * Validate a combined expiration month/year string in the following formats:
   *
   * MMYY
   * MMYYYY
   * MM/YY
   * MM/YYYY
   */
  validateCombinedExpiration(expiration: string): boolean {
    const stripped = expiration?.replace(/\//g, '');

    if (!stripped || (stripped.length !== 4 && stripped.length !== 6)) {
      return false;
    }

    const month = stripped.substring(0, 2);
    const year = stripped.substring(2);

    return this.validateExpiration(month, year);
  }

  /**
   * Validate expiration month and year
   *
   * Validates they're valid month and year values, as well as validating
   * that the month and year are greater than or equal to the current
   * month and year
   */
  validateExpiration(month: string, year: string) {
    return validateExpiration(month, year);
  }

  /**
   * Checks the validity of a month in isolation
   *
   * You can use this to check that a month input is valid, but you should
   * use the `validateExpiration(month, year)` function to validate that
   * the month and year are not just valid in isolation but are also correct
   * chronologically
   */
  validateExpirationMonth(month: string): boolean {
    return validateExpirationMonth(month);
  }

  /**
   * Checks the validity of a year in isolation
   *
   * You can use this to check that a year input is valid, but you should
   * use the `validateExpiration(month, year)` function to validate that
   * the month and year are not just valid in isolation but are also correct
   * chronologically
   */
  validateExpirationYear(year: string): boolean {
    return validateExpirationYear(year);
  }

  validateCvc(cardType: CardType, cvc: string) {
    const card = CARDS[cardType];

    if (!/^\d+$/.test(cvc)) {
      return false;
    }

    return cvc.length === card.cvcLength;
  }
}

function validateOptions(opts: CreditCardValidatorOptions) {
  if (!opts) {
    throw new Error('Must include options');
  }

  if (!opts?.allowedCardTypes?.length) {
    throw new Error('Must include at least one allowed card type');
  }
}
