"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.luhnCheck = void 0;
/**
 * Check Luhn algorithm
 */
const luhnCheck = (cardNumber) => {
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
exports.luhnCheck = luhnCheck;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibHVobi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jcmVkaXQtY2FyZC9sdWhuL2x1aG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0E7O0dBRUc7QUFDSSxNQUFNLFNBQVMsR0FBRyxDQUFDLFVBQWtCLEVBQVcsRUFBRTtJQUN2RCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFFWixNQUFNLGNBQWMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBRXRELGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbEMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFFakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNmLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDVjtRQUVELHFDQUFxQztRQUNyQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFDWCxHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ1Y7UUFFRCxHQUFHLElBQUksR0FBRyxDQUFDO0lBQ2IsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLEdBQUcsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3hCLENBQUMsQ0FBQztBQXJCVyxRQUFBLFNBQVMsYUFxQnBCIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIENoZWNrIEx1aG4gYWxnb3JpdGhtXG4gKi9cbmV4cG9ydCBjb25zdCBsdWhuQ2hlY2sgPSAoY2FyZE51bWJlcjogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIGxldCBzdW0gPSAwO1xuXG4gIGNvbnN0IHJldmVyc2VkRGlnaXRzID0gY2FyZE51bWJlci5zcGxpdCgnJykucmV2ZXJzZSgpO1xuXG4gIHJldmVyc2VkRGlnaXRzLmZvckVhY2goKGRpZ2l0LCBpKSA9PiB7XG4gICAgbGV0IG51bSA9ICtkaWdpdDtcblxuICAgIGlmIChpICUgMiAhPT0gMCkge1xuICAgICAgbnVtICo9IDI7XG4gICAgfVxuXG4gICAgLy8gc2FtZSBhcyBhZGRpbmcgdGhlIGRpZ2l0cyB0b2dldGhlclxuICAgIGlmIChudW0gPiA5KSB7XG4gICAgICBudW0gLT0gOTtcbiAgICB9XG5cbiAgICBzdW0gKz0gbnVtO1xuICB9KTtcblxuICByZXR1cm4gc3VtICUgMTAgPT09IDA7XG59O1xuIl19