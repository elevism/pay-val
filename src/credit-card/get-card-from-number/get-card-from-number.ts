import { Card } from '../interface';

/**
 * Get a card definition from a card number
 */
export const getCardFromCardNumber = (cards: Card[], cardNumber: string): Card => {
  const digits = cardNumber.replace(/\D/g, '');

  const matchingCards = cards.reduce<{ card: Card; len: number }>(
    (acc, curr) => {
      const match = digits.match(curr.pattern);

      if (!match || acc?.len > match[0].length) {
        return acc;
      }

      return { card: curr, len: match[0].length };
    },
    undefined,
  );

  return matchingCards?.card;
};
