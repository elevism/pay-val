"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCardNumber = void 0;
const luhn_1 = require("../luhn/luhn");
const cards_const_1 = require("../cards.const");
/**
 * Validate a credit card number
 */
const validateCardNumber = (cardType, cardNumber) => {
    if (typeof cardNumber === 'undefined') {
        return false;
    }
    const stripped = cardNumber.replace(/\s+|-/g, '');
    // if it's not all digits after stripping spaces/hyphens, it's invalid
    if (!/^\d+$/.test(stripped)) {
        return false;
    }
    const card = cards_const_1.CARDS[cardType];
    if (!card ||
        stripped.length < card.minLength ||
        stripped.length > card.maxLength ||
        (card.luhn && !(0, luhn_1.luhnCheck)(stripped))) {
        return false;
    }
    return true;
};
exports.validateCardNumber = validateCardNumber;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUtY2FyZC1udW1iZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY3JlZGl0LWNhcmQvdmFsaWRhdGUtY2FyZC1udW1iZXIvdmFsaWRhdGUtY2FyZC1udW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQXlDO0FBRXpDLGdEQUF1QztBQUV2Qzs7R0FFRztBQUNJLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxRQUFrQixFQUFFLFVBQWtCLEVBQVcsRUFBRTtJQUNwRixJQUFJLE9BQU8sVUFBVSxLQUFLLFdBQVcsRUFBRTtRQUNyQyxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsTUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFbEQsc0VBQXNFO0lBQ3RFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQzNCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxNQUFNLElBQUksR0FBUyxtQkFBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRW5DLElBQ0UsQ0FBQyxJQUFJO1FBQ0wsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUztRQUNoQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTO1FBQ2hDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUEsZ0JBQVMsRUFBQyxRQUFRLENBQUMsQ0FBQyxFQUNuQztRQUNBLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQXhCVyxRQUFBLGtCQUFrQixzQkF3QjdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbHVobkNoZWNrIH0gZnJvbSAnLi4vbHVobi9sdWhuJztcbmltcG9ydCB7IENhcmQsIENhcmRUeXBlIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IENBUkRTIH0gZnJvbSAnLi4vY2FyZHMuY29uc3QnO1xuXG4vKipcbiAqIFZhbGlkYXRlIGEgY3JlZGl0IGNhcmQgbnVtYmVyXG4gKi9cbmV4cG9ydCBjb25zdCB2YWxpZGF0ZUNhcmROdW1iZXIgPSAoY2FyZFR5cGU6IENhcmRUeXBlLCBjYXJkTnVtYmVyOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgaWYgKHR5cGVvZiBjYXJkTnVtYmVyID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHN0cmlwcGVkID0gY2FyZE51bWJlci5yZXBsYWNlKC9cXHMrfC0vZywgJycpO1xuXG4gIC8vIGlmIGl0J3Mgbm90IGFsbCBkaWdpdHMgYWZ0ZXIgc3RyaXBwaW5nIHNwYWNlcy9oeXBoZW5zLCBpdCdzIGludmFsaWRcbiAgaWYgKCEvXlxcZCskLy50ZXN0KHN0cmlwcGVkKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGNhcmQ6IENhcmQgPSBDQVJEU1tjYXJkVHlwZV07XG5cbiAgaWYgKFxuICAgICFjYXJkIHx8XG4gICAgc3RyaXBwZWQubGVuZ3RoIDwgY2FyZC5taW5MZW5ndGggfHxcbiAgICBzdHJpcHBlZC5sZW5ndGggPiBjYXJkLm1heExlbmd0aCB8fFxuICAgIChjYXJkLmx1aG4gJiYgIWx1aG5DaGVjayhzdHJpcHBlZCkpXG4gICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiJdfQ==