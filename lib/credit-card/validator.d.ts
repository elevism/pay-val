import { CardType, Card } from './interface';
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
export declare class CreditCardValidator {
    allowedCardTypes: CardType[];
    allowedCards: Card[];
    constructor(opts: CreditCardValidatorOptions);
    /**
     * Get the `Card` object from a provided card number
     */
    getCardFromCardNumber(cardNumber: string): Card;
    /**
     * Get the `CardType` from a provided card number
     */
    getCardTypeFromCardNumber(cardNumber: string): CardType;
    /**
     * Validate a credit card number against the allowed card types
     */
    validateCardNumber(cardNumber: string): boolean;
    /**
     * Validate a combined expiration month/year string in the following formats:
     *
     * MMYY
     * MMYYYY
     * MM/YY
     * MM/YYYY
     */
    validateCombinedExpiration(expiration: string): boolean;
    /**
     * Validate expiration month and year
     *
     * Validates they're valid month and year values, as well as validating
     * that the month and year are greater than or equal to the current
     * month and year
     */
    validateExpiration(month: string, year: string): boolean;
    /**
     * Checks the validity of a month in isolation
     *
     * You can use this to check that a month input is valid, but you should
     * use the `validateExpiration(month, year)` function to validate that
     * the month and year are not just valid in isolation but are also correct
     * chronologically
     */
    validateExpirationMonth(month: string): boolean;
    /**
     * Checks the validity of a year in isolation
     *
     * You can use this to check that a year input is valid, but you should
     * use the `validateExpiration(month, year)` function to validate that
     * the month and year are not just valid in isolation but are also correct
     * chronologically
     */
    validateExpirationYear(year: string): boolean;
    validateCvc(cardType: CardType, cvc: string): boolean;
}
