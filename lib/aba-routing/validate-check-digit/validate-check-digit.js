"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCheckDigit = void 0;
/**
 * Validate the check digit of a routing number
 *
 * Number validation:
 * 3 * (D[0] + D[3] + D[6]) + 7 * (D[1] + D[4] + D[7]) + (D[2] + D[5] + D[8]) % 10 = 0
 *
 * Solved for D[8] (the ninth digit, the check digit)
 * D[8] = 7 * (D[0] + D[3] + D[6]) + 3 * (D[1] + D[4] + D7]) + 9 * (D[2] + D[5]) % 10
 */
const validateCheckDigit = (routingNumber) => {
    if (!routingNumber || routingNumber.length !== 9) {
        return false;
    }
    const digits = [...routingNumber].map((d) => +d);
    const checkDigit = digits.pop();
    // tslint:disable binary-expression-operand-order
    const checkSum = (7 * (digits[0] + digits[3] + digits[6]) +
        3 * (digits[1] + digits[4] + digits[7]) +
        9 * (digits[2] + digits[5])) % 10;
    // tslint:enable binary-expression-operand-order
    return checkSum === checkDigit;
};
exports.validateCheckDigit = validateCheckDigit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUtY2hlY2stZGlnaXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYWJhLXJvdXRpbmcvdmFsaWRhdGUtY2hlY2stZGlnaXQvdmFsaWRhdGUtY2hlY2stZGlnaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7Ozs7O0dBUUc7QUFDSSxNQUFNLGtCQUFrQixHQUFHLENBQUMsYUFBcUIsRUFBVyxFQUFFO0lBQ25FLElBQUksQ0FBQyxhQUFhLElBQUksYUFBYSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDaEQsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELE1BQU0sTUFBTSxHQUFhLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFM0QsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBRWhDLGlEQUFpRDtJQUNqRCxNQUFNLFFBQVEsR0FBRyxDQUNmLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDNUIsR0FBRyxFQUFFLENBQUM7SUFDUCxnREFBZ0Q7SUFFaEQsT0FBTyxRQUFRLEtBQUssVUFBVSxDQUFDO0FBQ2pDLENBQUMsQ0FBQztBQWxCVyxRQUFBLGtCQUFrQixzQkFrQjdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBWYWxpZGF0ZSB0aGUgY2hlY2sgZGlnaXQgb2YgYSByb3V0aW5nIG51bWJlclxuICpcbiAqIE51bWJlciB2YWxpZGF0aW9uOlxuICogMyAqIChEWzBdICsgRFszXSArIERbNl0pICsgNyAqIChEWzFdICsgRFs0XSArIERbN10pICsgKERbMl0gKyBEWzVdICsgRFs4XSkgJSAxMCA9IDBcbiAqXG4gKiBTb2x2ZWQgZm9yIERbOF0gKHRoZSBuaW50aCBkaWdpdCwgdGhlIGNoZWNrIGRpZ2l0KVxuICogRFs4XSA9IDcgKiAoRFswXSArIERbM10gKyBEWzZdKSArIDMgKiAoRFsxXSArIERbNF0gKyBEN10pICsgOSAqIChEWzJdICsgRFs1XSkgJSAxMFxuICovXG5leHBvcnQgY29uc3QgdmFsaWRhdGVDaGVja0RpZ2l0ID0gKHJvdXRpbmdOdW1iZXI6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICBpZiAoIXJvdXRpbmdOdW1iZXIgfHwgcm91dGluZ051bWJlci5sZW5ndGggIT09IDkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBkaWdpdHM6IG51bWJlcltdID0gWy4uLnJvdXRpbmdOdW1iZXJdLm1hcCgoZCkgPT4gK2QpO1xuXG4gIGNvbnN0IGNoZWNrRGlnaXQgPSBkaWdpdHMucG9wKCk7XG5cbiAgLy8gdHNsaW50OmRpc2FibGUgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlclxuICBjb25zdCBjaGVja1N1bSA9IChcbiAgICA3ICogKGRpZ2l0c1swXSArIGRpZ2l0c1szXSArIGRpZ2l0c1s2XSkgK1xuICAgIDMgKiAoZGlnaXRzWzFdICsgZGlnaXRzWzRdICsgZGlnaXRzWzddKSArXG4gICAgOSAqIChkaWdpdHNbMl0gKyBkaWdpdHNbNV0pXG4gICkgJSAxMDtcbiAgLy8gdHNsaW50OmVuYWJsZSBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyXG5cbiAgcmV0dXJuIGNoZWNrU3VtID09PSBjaGVja0RpZ2l0O1xufTtcbiJdfQ==