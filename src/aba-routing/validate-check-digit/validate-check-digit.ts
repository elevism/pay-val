/**
 * Validate the check digit of a routing number
 *
 * Number validation:
 * 3 * (D[0] + D[3] + D[6]) + 7 * (D[1] + D[4] + D[7]) + (D[2] + D[5] + D[8]) % 10 = 0
 *
 * Solved for D[8] (the ninth digit, the check digit)
 * D[8] = 7 * (D[0] + D[3] + D[6]) + 3 * (D[1] + D[4] + D7]) + 9 * (D[2] + D[5]) % 10
 */
export const validateCheckDigit = (routingNumber: string): boolean => {
  if (!routingNumber || routingNumber.length !== 9) {
    return false;
  }

  const digits: number[] = [...routingNumber].map((d) => +d);

  const checkDigit = digits.pop();

  // tslint:disable binary-expression-operand-order
  const checkSum = (
    7 * (digits[0] + digits[3] + digits[6]) +
    3 * (digits[1] + digits[4] + digits[7]) +
    9 * (digits[2] + digits[5])
  ) % 10;
  // tslint:enable binary-expression-operand-order

  return checkSum === checkDigit;
};
