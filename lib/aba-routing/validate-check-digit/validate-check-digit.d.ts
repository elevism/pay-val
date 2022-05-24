/**
 * Validate the check digit of a routing number
 *
 * Number validation:
 * 3 * (D[0] + D[3] + D[6]) + 7 * (D[1] + D[4] + D[7]) + (D[2] + D[5] + D[8]) % 10 = 0
 *
 * Solved for D[8] (the ninth digit, the check digit)
 * D[8] = 7 * (D[0] + D[3] + D[6]) + 3 * (D[1] + D[4] + D7]) + 9 * (D[2] + D[5]) % 10
 */
export declare const validateCheckDigit: (routingNumber: string) => boolean;
