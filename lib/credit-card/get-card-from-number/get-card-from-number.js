"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCardFromCardNumber = void 0;
/**
 * Get a card definition from a card number
 */
const getCardFromCardNumber = (cards, cardNumber) => {
    if (typeof cardNumber === 'undefined') {
        return undefined;
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LWNhcmQtZnJvbS1udW1iZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY3JlZGl0LWNhcmQvZ2V0LWNhcmQtZnJvbS1udW1iZXIvZ2V0LWNhcmQtZnJvbS1udW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUE7O0dBRUc7QUFDSSxNQUFNLHFCQUFxQixHQUFHLENBQUMsS0FBYSxFQUFFLFVBQWtCLEVBQVEsRUFBRTtJQUMvRSxJQUFJLE9BQU8sVUFBVSxLQUFLLFdBQVcsRUFBRTtRQUNyQyxPQUFPLFNBQVMsQ0FBQztLQUNsQjtJQUVELE1BQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRTdDLE1BQU0sYUFBYSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQ2hDLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO1FBQ1osTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFBLEdBQUcsYUFBSCxHQUFHLHVCQUFILEdBQUcsQ0FBRSxHQUFHLElBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUN4QyxPQUFPLEdBQUcsQ0FBQztTQUNaO1FBRUQsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM5QyxDQUFDLEVBQ0QsU0FBUyxDQUNWLENBQUM7SUFFRixPQUFPLGFBQWEsYUFBYixhQUFhLHVCQUFiLGFBQWEsQ0FBRSxJQUFJLENBQUM7QUFDN0IsQ0FBQyxDQUFDO0FBckJXLFFBQUEscUJBQXFCLHlCQXFCaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcblxuLyoqXG4gKiBHZXQgYSBjYXJkIGRlZmluaXRpb24gZnJvbSBhIGNhcmQgbnVtYmVyXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDYXJkRnJvbUNhcmROdW1iZXIgPSAoY2FyZHM6IENhcmRbXSwgY2FyZE51bWJlcjogc3RyaW5nKTogQ2FyZCA9PiB7XG4gIGlmICh0eXBlb2YgY2FyZE51bWJlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgY29uc3QgZGlnaXRzID0gY2FyZE51bWJlci5yZXBsYWNlKC9cXEQvZywgJycpO1xuXG4gIGNvbnN0IG1hdGNoaW5nQ2FyZHMgPSBjYXJkcy5yZWR1Y2U8eyBjYXJkOiBDYXJkOyBsZW46IG51bWJlciB9PihcbiAgICAoYWNjLCBjdXJyKSA9PiB7XG4gICAgICBjb25zdCBtYXRjaCA9IGRpZ2l0cy5tYXRjaChjdXJyLnBhdHRlcm4pO1xuXG4gICAgICBpZiAoIW1hdGNoIHx8IGFjYz8ubGVuID4gbWF0Y2hbMF0ubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IGNhcmQ6IGN1cnIsIGxlbjogbWF0Y2hbMF0ubGVuZ3RoIH07XG4gICAgfSxcbiAgICB1bmRlZmluZWQsXG4gICk7XG5cbiAgcmV0dXJuIG1hdGNoaW5nQ2FyZHM/LmNhcmQ7XG59O1xuIl19