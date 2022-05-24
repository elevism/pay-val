"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCardFromCardNumber = void 0;
/**
 * Get a card definition from a card number
 */
const getCardFromCardNumber = (cards, cardNumber) => {
    const digits = cardNumber.replace(/\D/g, '');
    const matchingCards = cards.reduce((acc, curr) => {
        const match = digits.match(curr.pattern);
        if (!match || (acc === null || acc === void 0 ? void 0 : acc.len) > match[0].length) {
            return acc;
        }
        return { card: curr, len: match[0].length };
    }, undefined);
    return matchingCards === null || matchingCards === void 0 ? void 0 : matchingCards.card;
};
exports.getCardFromCardNumber = getCardFromCardNumber;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWNhcmQtZnJvbS1udW1iZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY3JlZGl0LWNhcmQvZ2V0LWNhcmQtZnJvbS1udW1iZXIvZ2V0LWNhcmQtZnJvbS1udW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUE7O0dBRUc7QUFDSSxNQUFNLHFCQUFxQixHQUFHLENBQUMsS0FBYSxFQUFFLFVBQWtCLEVBQVEsRUFBRTtJQUMvRSxNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztJQUU3QyxNQUFNLGFBQWEsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUNoQyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtRQUNaLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXpDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQSxHQUFHLGFBQUgsR0FBRyx1QkFBSCxHQUFHLENBQUUsR0FBRyxJQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUU7WUFDeEMsT0FBTyxHQUFHLENBQUM7U0FDWjtRQUVELE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDOUMsQ0FBQyxFQUNELFNBQVMsQ0FDVixDQUFDO0lBRUYsT0FBTyxhQUFhLGFBQWIsYUFBYSx1QkFBYixhQUFhLENBQUUsSUFBSSxDQUFDO0FBQzdCLENBQUMsQ0FBQztBQWpCVyxRQUFBLHFCQUFxQix5QkFpQmhDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5cbi8qKlxuICogR2V0IGEgY2FyZCBkZWZpbml0aW9uIGZyb20gYSBjYXJkIG51bWJlclxuICovXG5leHBvcnQgY29uc3QgZ2V0Q2FyZEZyb21DYXJkTnVtYmVyID0gKGNhcmRzOiBDYXJkW10sIGNhcmROdW1iZXI6IHN0cmluZyk6IENhcmQgPT4ge1xuICBjb25zdCBkaWdpdHMgPSBjYXJkTnVtYmVyLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG5cbiAgY29uc3QgbWF0Y2hpbmdDYXJkcyA9IGNhcmRzLnJlZHVjZTx7IGNhcmQ6IENhcmQ7IGxlbjogbnVtYmVyIH0+KFxuICAgIChhY2MsIGN1cnIpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoID0gZGlnaXRzLm1hdGNoKGN1cnIucGF0dGVybik7XG5cbiAgICAgIGlmICghbWF0Y2ggfHwgYWNjPy5sZW4gPiBtYXRjaFswXS5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgY2FyZDogY3VyciwgbGVuOiBtYXRjaFswXS5sZW5ndGggfTtcbiAgICB9LFxuICAgIHVuZGVmaW5lZCxcbiAgKTtcblxuICByZXR1cm4gbWF0Y2hpbmdDYXJkcz8uY2FyZDtcbn07XG4iXX0=