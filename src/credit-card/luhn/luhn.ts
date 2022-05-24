
/**
 * Check Luhn algorithm
 */
export const luhnCheck = (cardNumber: string): boolean => {
  let sum = 0;

  const reversedDigits = cardNumber.split('').reverse();

  reversedDigits.forEach((digit, i) => {
    let num = +digit;

    if (i % 2 !== 0) {
      num *= 2;
    }

    // same as adding the digits together
    if (num > 9) {
      num -= 9;
    }

    sum += num;
  });

  return sum % 10 === 0;
};
