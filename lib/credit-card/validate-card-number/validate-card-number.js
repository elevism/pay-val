"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCardNumber = void 0;
const luhn_1 = require("../luhn/luhn");
const cards_const_1 = require("../cards.const");
/**
 * Validate a credit card number
 */
const validateCardNumber = (cardType, cardNumber) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUtY2FyZC1udW1iZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY3JlZGl0LWNhcmQvdmFsaWRhdGUtY2FyZC1udW1iZXIvdmFsaWRhdGUtY2FyZC1udW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsdUNBQXlDO0FBRXpDLGdEQUF1QztBQUV2Qzs7R0FFRztBQUNJLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxRQUFrQixFQUFFLFVBQWtCLEVBQVcsRUFBRTtJQUNwRixNQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVsRCxzRUFBc0U7SUFDdEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDM0IsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELE1BQU0sSUFBSSxHQUFTLG1CQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFbkMsSUFDRSxDQUFDLElBQUk7UUFDTCxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTO1FBQ2hDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVM7UUFDaEMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBQSxnQkFBUyxFQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ25DO1FBQ0EsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFDO0FBcEJXLFFBQUEsa0JBQWtCLHNCQW9CN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsdWhuQ2hlY2sgfSBmcm9tICcuLi9sdWhuL2x1aG4nO1xuaW1wb3J0IHsgQ2FyZCwgQ2FyZFR5cGUgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ0FSRFMgfSBmcm9tICcuLi9jYXJkcy5jb25zdCc7XG5cbi8qKlxuICogVmFsaWRhdGUgYSBjcmVkaXQgY2FyZCBudW1iZXJcbiAqL1xuZXhwb3J0IGNvbnN0IHZhbGlkYXRlQ2FyZE51bWJlciA9IChjYXJkVHlwZTogQ2FyZFR5cGUsIGNhcmROdW1iZXI6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBzdHJpcHBlZCA9IGNhcmROdW1iZXIucmVwbGFjZSgvXFxzK3wtL2csICcnKTtcblxuICAvLyBpZiBpdCdzIG5vdCBhbGwgZGlnaXRzIGFmdGVyIHN0cmlwcGluZyBzcGFjZXMvaHlwaGVucywgaXQncyBpbnZhbGlkXG4gIGlmICghL15cXGQrJC8udGVzdChzdHJpcHBlZCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBjYXJkOiBDYXJkID0gQ0FSRFNbY2FyZFR5cGVdO1xuXG4gIGlmIChcbiAgICAhY2FyZCB8fFxuICAgIHN0cmlwcGVkLmxlbmd0aCA8IGNhcmQubWluTGVuZ3RoIHx8XG4gICAgc3RyaXBwZWQubGVuZ3RoID4gY2FyZC5tYXhMZW5ndGggfHxcbiAgICAoY2FyZC5sdWhuICYmICFsdWhuQ2hlY2soc3RyaXBwZWQpKVxuICApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4iXX0=