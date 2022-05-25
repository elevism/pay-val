import { luhnCheck } from '../luhn/luhn';
import { Card, CardType } from '../interface';
import { CARDS } from '../cards.const';

/**
 * Validate a credit card number
 */
export const validateCardNumber = (cardType: CardType, cardNumber: string): boolean => {
  if (typeof cardNumber === 'undefined') {
    return false;
  }

  const stripped = cardNumber.replace(/\s+|-/g, '');

  // if it's not all digits after stripping spaces/hyphens, it's invalid
  if (!/^\d+$/.test(stripped)) {
    return false;
  }

  const card: Card = CARDS[cardType];

  if (
    !card ||
    stripped.length < card.minLength ||
    stripped.length > card.maxLength ||
    (card.luhn && !luhnCheck(stripped))
  ) {
    return false;
  }

  return true;
};
