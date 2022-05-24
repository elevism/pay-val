"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardValidator = void 0;
const cards_const_1 = require("./cards.const");
const get_card_from_number_1 = require("./get-card-from-number/get-card-from-number");
const validate_card_number_1 = require("./validate-card-number/validate-card-number");
const validate_expiration_1 = require("./validate-expiration/validate-expiration");
/**
 * Validation
 */
class CreditCardValidator {
    constructor(opts) {
        validateOptions(opts);
        this.allowedCardTypes = opts.allowedCardTypes;
        this.allowedCards = opts.allowedCardTypes.map((cardType) => cards_const_1.CARDS[cardType]);
    }
    /**
     * Get the `Card` object from a provided card number
     */
    getCardFromCardNumber(cardNumber) {
        return (0, get_card_from_number_1.getCardFromCardNumber)(this.allowedCards, cardNumber);
    }
    /**
     * Get the `CardType` from a provided card number
     */
    getCardTypeFromCardNumber(cardNumber) {
        var _a;
        return (_a = this.getCardFromCardNumber(cardNumber)) === null || _a === void 0 ? void 0 : _a.type;
    }
    /**
     * Validate a credit card number against the allowed card types
     */
    validateCardNumber(cardNumber) {
        const cardType = this.getCardTypeFromCardNumber(cardNumber);
        return (0, validate_card_number_1.validateCardNumber)(cardType, cardNumber);
    }
    /**
     * Validate a combined expiration month/year string in the following formats:
     *
     * MMYY
     * MMYYYY
     * MM/YY
     * MM/YYYY
     */
    validateCombinedExpiration(expiration) {
        const stripped = expiration === null || expiration === void 0 ? void 0 : expiration.replace(/\//g, '');
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
    validateExpiration(month, year) {
        return (0, validate_expiration_1.validateExpiration)(month, year);
    }
    /**
     * Checks the validity of a month in isolation
     *
     * You can use this to check that a month input is valid, but you should
     * use the `validateExpiration(month, year)` function to validate that
     * the month and year are not just valid in isolation but are also correct
     * chronologically
     */
    validateExpirationMonth(month) {
        return (0, validate_expiration_1.validateExpirationMonth)(month);
    }
    /**
     * Checks the validity of a year in isolation
     *
     * You can use this to check that a year input is valid, but you should
     * use the `validateExpiration(month, year)` function to validate that
     * the month and year are not just valid in isolation but are also correct
     * chronologically
     */
    validateExpirationYear(year) {
        return (0, validate_expiration_1.validateExpirationYear)(year);
    }
    validateCvc(cardType, cvc) {
        const card = cards_const_1.CARDS[cardType];
        if (!/^\d+$/.test(cvc)) {
            return false;
        }
        return cvc.length === card.cvcLength;
    }
}
exports.CreditCardValidator = CreditCardValidator;
function validateOptions(opts) {
    var _a;
    if (!opts) {
        throw new Error('Must include options');
    }
    if (!((_a = opts === null || opts === void 0 ? void 0 : opts.allowedCardTypes) === null || _a === void 0 ? void 0 : _a.length)) {
        throw new Error('Must include at least one allowed card type');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NyZWRpdC1jYXJkL3ZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBc0M7QUFFdEMsc0ZBQW9GO0FBQ3BGLHNGQUFpRjtBQUNqRixtRkFBZ0k7QUFZaEk7O0dBRUc7QUFDSCxNQUFhLG1CQUFtQjtJQUk5QixZQUFZLElBQWdDO1FBQzFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQzlDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsbUJBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRDs7T0FFRztJQUNILHFCQUFxQixDQUFDLFVBQWtCO1FBQ3RDLE9BQU8sSUFBQSw0Q0FBcUIsRUFBQyxJQUFJLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRDs7T0FFRztJQUNILHlCQUF5QixDQUFDLFVBQWtCOztRQUMxQyxPQUFPLE1BQUEsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQywwQ0FBRSxJQUFJLENBQUM7SUFDdEQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsa0JBQWtCLENBQUMsVUFBa0I7UUFDbkMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTVELE9BQU8sSUFBQSx5Q0FBa0IsRUFBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCwwQkFBMEIsQ0FBQyxVQUFrQjtRQUMzQyxNQUFNLFFBQVEsR0FBRyxVQUFVLGFBQVYsVUFBVSx1QkFBVixVQUFVLENBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVoRCxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNqRSxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdkMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVuQyxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILGtCQUFrQixDQUFDLEtBQWEsRUFBRSxJQUFZO1FBQzVDLE9BQU8sSUFBQSx3Q0FBa0IsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCx1QkFBdUIsQ0FBQyxLQUFhO1FBQ25DLE9BQU8sSUFBQSw2Q0FBdUIsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILHNCQUFzQixDQUFDLElBQVk7UUFDakMsT0FBTyxJQUFBLDRDQUFzQixFQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxXQUFXLENBQUMsUUFBa0IsRUFBRSxHQUFXO1FBQ3pDLE1BQU0sSUFBSSxHQUFHLG1CQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdEIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELE9BQU8sR0FBRyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRjtBQW5HRCxrREFtR0M7QUFFRCxTQUFTLGVBQWUsQ0FBQyxJQUFnQzs7SUFDdkQsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNULE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztLQUN6QztJQUVELElBQUksQ0FBQyxDQUFBLE1BQUEsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLGdCQUFnQiwwQ0FBRSxNQUFNLENBQUEsRUFBRTtRQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7S0FDaEU7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ0FSRFMgfSBmcm9tICcuL2NhcmRzLmNvbnN0JztcbmltcG9ydCB7IENhcmRUeXBlLCBDYXJkIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgZ2V0Q2FyZEZyb21DYXJkTnVtYmVyIH0gZnJvbSAnLi9nZXQtY2FyZC1mcm9tLW51bWJlci9nZXQtY2FyZC1mcm9tLW51bWJlcic7XG5pbXBvcnQgeyB2YWxpZGF0ZUNhcmROdW1iZXIgfSBmcm9tICcuL3ZhbGlkYXRlLWNhcmQtbnVtYmVyL3ZhbGlkYXRlLWNhcmQtbnVtYmVyJztcbmltcG9ydCB7IHZhbGlkYXRlRXhwaXJhdGlvbiwgdmFsaWRhdGVFeHBpcmF0aW9uTW9udGgsIHZhbGlkYXRlRXhwaXJhdGlvblllYXIgfSBmcm9tICcuL3ZhbGlkYXRlLWV4cGlyYXRpb24vdmFsaWRhdGUtZXhwaXJhdGlvbic7XG5cbi8qKlxuICogT3B0aW9ucyBmb3IgdmFsaWRhdGlvblxuICovXG5leHBvcnQgaW50ZXJmYWNlIENyZWRpdENhcmRWYWxpZGF0b3JPcHRpb25zIHtcbiAgLyoqXG4gICAqIEFycmF5IG9mIENhcmRUeXBlIHRvIGFsbG93IGZvciB2YWxpZGF0aW9uXG4gICAqL1xuICBhbGxvd2VkQ2FyZFR5cGVzOiBDYXJkVHlwZVtdO1xufVxuXG4vKipcbiAqIFZhbGlkYXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIENyZWRpdENhcmRWYWxpZGF0b3Ige1xuICBhbGxvd2VkQ2FyZFR5cGVzITogQ2FyZFR5cGVbXTtcbiAgYWxsb3dlZENhcmRzITogQ2FyZFtdO1xuXG4gIGNvbnN0cnVjdG9yKG9wdHM6IENyZWRpdENhcmRWYWxpZGF0b3JPcHRpb25zKSB7XG4gICAgdmFsaWRhdGVPcHRpb25zKG9wdHMpO1xuXG4gICAgdGhpcy5hbGxvd2VkQ2FyZFR5cGVzID0gb3B0cy5hbGxvd2VkQ2FyZFR5cGVzO1xuICAgIHRoaXMuYWxsb3dlZENhcmRzID0gb3B0cy5hbGxvd2VkQ2FyZFR5cGVzLm1hcCgoY2FyZFR5cGUpID0+IENBUkRTW2NhcmRUeXBlXSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBgQ2FyZGAgb2JqZWN0IGZyb20gYSBwcm92aWRlZCBjYXJkIG51bWJlclxuICAgKi9cbiAgZ2V0Q2FyZEZyb21DYXJkTnVtYmVyKGNhcmROdW1iZXI6IHN0cmluZyk6IENhcmQge1xuICAgIHJldHVybiBnZXRDYXJkRnJvbUNhcmROdW1iZXIodGhpcy5hbGxvd2VkQ2FyZHMsIGNhcmROdW1iZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYENhcmRUeXBlYCBmcm9tIGEgcHJvdmlkZWQgY2FyZCBudW1iZXJcbiAgICovXG4gIGdldENhcmRUeXBlRnJvbUNhcmROdW1iZXIoY2FyZE51bWJlcjogc3RyaW5nKTogQ2FyZFR5cGUge1xuICAgIHJldHVybiB0aGlzLmdldENhcmRGcm9tQ2FyZE51bWJlcihjYXJkTnVtYmVyKT8udHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSBhIGNyZWRpdCBjYXJkIG51bWJlciBhZ2FpbnN0IHRoZSBhbGxvd2VkIGNhcmQgdHlwZXNcbiAgICovXG4gIHZhbGlkYXRlQ2FyZE51bWJlcihjYXJkTnVtYmVyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBjYXJkVHlwZSA9IHRoaXMuZ2V0Q2FyZFR5cGVGcm9tQ2FyZE51bWJlcihjYXJkTnVtYmVyKTtcblxuICAgIHJldHVybiB2YWxpZGF0ZUNhcmROdW1iZXIoY2FyZFR5cGUsIGNhcmROdW1iZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFZhbGlkYXRlIGEgY29tYmluZWQgZXhwaXJhdGlvbiBtb250aC95ZWFyIHN0cmluZyBpbiB0aGUgZm9sbG93aW5nIGZvcm1hdHM6XG4gICAqXG4gICAqIE1NWVlcbiAgICogTU1ZWVlZXG4gICAqIE1NL1lZXG4gICAqIE1NL1lZWVlcbiAgICovXG4gIHZhbGlkYXRlQ29tYmluZWRFeHBpcmF0aW9uKGV4cGlyYXRpb246IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHN0cmlwcGVkID0gZXhwaXJhdGlvbj8ucmVwbGFjZSgvXFwvL2csICcnKTtcblxuICAgIGlmICghc3RyaXBwZWQgfHwgKHN0cmlwcGVkLmxlbmd0aCAhPT0gNCAmJiBzdHJpcHBlZC5sZW5ndGggIT09IDYpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgY29uc3QgbW9udGggPSBzdHJpcHBlZC5zdWJzdHJpbmcoMCwgMik7XG4gICAgY29uc3QgeWVhciA9IHN0cmlwcGVkLnN1YnN0cmluZygyKTtcblxuICAgIHJldHVybiB0aGlzLnZhbGlkYXRlRXhwaXJhdGlvbihtb250aCwgeWVhcik7XG4gIH1cblxuICAvKipcbiAgICogVmFsaWRhdGUgZXhwaXJhdGlvbiBtb250aCBhbmQgeWVhclxuICAgKlxuICAgKiBWYWxpZGF0ZXMgdGhleSdyZSB2YWxpZCBtb250aCBhbmQgeWVhciB2YWx1ZXMsIGFzIHdlbGwgYXMgdmFsaWRhdGluZ1xuICAgKiB0aGF0IHRoZSBtb250aCBhbmQgeWVhciBhcmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHRoZSBjdXJyZW50XG4gICAqIG1vbnRoIGFuZCB5ZWFyXG4gICAqL1xuICB2YWxpZGF0ZUV4cGlyYXRpb24obW9udGg6IHN0cmluZywgeWVhcjogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHZhbGlkYXRlRXhwaXJhdGlvbihtb250aCwgeWVhcik7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIHRoZSB2YWxpZGl0eSBvZiBhIG1vbnRoIGluIGlzb2xhdGlvblxuICAgKlxuICAgKiBZb3UgY2FuIHVzZSB0aGlzIHRvIGNoZWNrIHRoYXQgYSBtb250aCBpbnB1dCBpcyB2YWxpZCwgYnV0IHlvdSBzaG91bGRcbiAgICogdXNlIHRoZSBgdmFsaWRhdGVFeHBpcmF0aW9uKG1vbnRoLCB5ZWFyKWAgZnVuY3Rpb24gdG8gdmFsaWRhdGUgdGhhdFxuICAgKiB0aGUgbW9udGggYW5kIHllYXIgYXJlIG5vdCBqdXN0IHZhbGlkIGluIGlzb2xhdGlvbiBidXQgYXJlIGFsc28gY29ycmVjdFxuICAgKiBjaHJvbm9sb2dpY2FsbHlcbiAgICovXG4gIHZhbGlkYXRlRXhwaXJhdGlvbk1vbnRoKG1vbnRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdmFsaWRhdGVFeHBpcmF0aW9uTW9udGgobW9udGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyB0aGUgdmFsaWRpdHkgb2YgYSB5ZWFyIGluIGlzb2xhdGlvblxuICAgKlxuICAgKiBZb3UgY2FuIHVzZSB0aGlzIHRvIGNoZWNrIHRoYXQgYSB5ZWFyIGlucHV0IGlzIHZhbGlkLCBidXQgeW91IHNob3VsZFxuICAgKiB1c2UgdGhlIGB2YWxpZGF0ZUV4cGlyYXRpb24obW9udGgsIHllYXIpYCBmdW5jdGlvbiB0byB2YWxpZGF0ZSB0aGF0XG4gICAqIHRoZSBtb250aCBhbmQgeWVhciBhcmUgbm90IGp1c3QgdmFsaWQgaW4gaXNvbGF0aW9uIGJ1dCBhcmUgYWxzbyBjb3JyZWN0XG4gICAqIGNocm9ub2xvZ2ljYWxseVxuICAgKi9cbiAgdmFsaWRhdGVFeHBpcmF0aW9uWWVhcih5ZWFyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdmFsaWRhdGVFeHBpcmF0aW9uWWVhcih5ZWFyKTtcbiAgfVxuXG4gIHZhbGlkYXRlQ3ZjKGNhcmRUeXBlOiBDYXJkVHlwZSwgY3ZjOiBzdHJpbmcpIHtcbiAgICBjb25zdCBjYXJkID0gQ0FSRFNbY2FyZFR5cGVdO1xuXG4gICAgaWYgKCEvXlxcZCskLy50ZXN0KGN2YykpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3ZjLmxlbmd0aCA9PT0gY2FyZC5jdmNMZW5ndGg7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsaWRhdGVPcHRpb25zKG9wdHM6IENyZWRpdENhcmRWYWxpZGF0b3JPcHRpb25zKSB7XG4gIGlmICghb3B0cykge1xuICAgIHRocm93IG5ldyBFcnJvcignTXVzdCBpbmNsdWRlIG9wdGlvbnMnKTtcbiAgfVxuXG4gIGlmICghb3B0cz8uYWxsb3dlZENhcmRUeXBlcz8ubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IGluY2x1ZGUgYXQgbGVhc3Qgb25lIGFsbG93ZWQgY2FyZCB0eXBlJyk7XG4gIH1cbn1cbiJdfQ==