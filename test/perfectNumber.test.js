const { PerfectNumber } = require('../perfectNumber');

describe('PerfectNumber', () => {
    const perfectNumber = new PerfectNumber();
    it('should return true for perfect number 6', () => {
        expect(perfectNumber.isPerfect(6)).toBe(true);
    });

    //
    it('should return true for perfect number 28', () => {
        expect(perfectNumber.isPerfect(28)).toBe(true);
    });

    it('should return false for non-perfect number 10', () => {
        expect(perfectNumber.isPerfect(10)).toBe(false);
    });

    it('should return false for non-perfect number 0', () => {
        expect(perfectNumber.isPerfect(0)).toBe(false);
    });

});
